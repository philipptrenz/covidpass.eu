import express from 'express';
import cors from 'cors';
import forge from 'node-forge';
import crypto from 'crypto';
import fs from 'fs';
import axios from 'axios';

import img from '../plugins/src/img'

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000']

const CERT = fs.readFileSync(`./keys/${ process.env.PASS_TYPE_IDENTIFIER.substring(5) }.pem`)
const CERT_PASSPHRASE = process.env.PASS_CERT_SECRET
const APPLE_CA_CERTIFICATE = forge.pki.certificateFromPem(fs.readFileSync('./keys/wwdr.pem'))

const FAQ_DATA_URL = { DE: process.env.FAQ_DATA_URL_DE, EN: process.env.FAQ_DATA_URL_EN };
const FAQ_CACHE_DURATION = process.env.FAQ_CACHE_DURATION ? process.env.FAQ_CACHE_DURATION : 60 * 60 * 1000; // One hour

/*
 * Almost completely from https://github.com/covidpass-org/covidpass-api/blob/main/server.js
 * 
 */

function getBufferHash(buffer) {
    // creating hash
    const sha = crypto.createHash('sha1');
    sha.update(buffer);
    return sha.digest('hex');
}

const imgHashes = {
    icon: getBufferHash(img.icon),
    icon2x: getBufferHash(img.icon2x),
    logo: getBufferHash(img.logo),
    logo2x: getBufferHash(img.logo2x),
}

const app = express()

const corsOptions = {
    origin: function(origin, callback) {
        console.log(origin)
        if (ALLOWED_ORIGINS.indexOf(origin) === -1) {
            console.warn(`Received request on /api from unallowed origin`, origin)
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.'
            return callback(new Error(msg), false)
        }
        return callback(null, true)
    }
}

app.use(express.json())

app.post('/sign', cors(corsOptions), async (req, res) => {

    let manifestJson = req.body

    if ( !('pass.json' in manifestJson) ||
         !('icon.png' in manifestJson) ||
         !('icon@2x.png' in manifestJson) ||
         !('logo.png' in manifestJson) ||
         !('logo@2x.png' in manifestJson) ) {
        console.warn("Received request with invalid payload")
        res.status(400).send('Could not decode payload')
        return
    }

    if ( manifestJson['icon.png'] != imgHashes.icon ||
         manifestJson['icon@2x.png'] != imgHashes.icon2x ||
         manifestJson['logo.png'] != imgHashes.logo ||
         manifestJson['logo@2x.png'] != imgHashes.logo2x ) {
        console.warn("Received request with invalid payload, hashes not matching")
        res.status(400).send('Could not decode payload')
        return
    }

    let certificate
    let key

    try {
        // From https://github.com/walletpass/pass-js/blob/2b6475749582ca3ea742a91466303cb0eb01a13a/src/template.ts#L249 
        certificate = forge.pki.certificateFromPem(CERT);
        if (!certificate) {
            res.status(500).send('Failed to load signing identity')
            return
        }
        const pemMessages = forge.pem.decode(CERT);
        const signerKeyMessage = pemMessages.find(message =>
            message.type.includes('KEY'),
        );
        if (signerKeyMessage) {
            key = forge.pki.decryptRsaPrivateKey(
                forge.pem.encode(signerKeyMessage),
                CERT_PASSPHRASE
            )
            if (!key) {
                console.log("Failed to decode the key.")
            }
        }
    } catch (e) {
        console.log(e)
        res.status(500).send('Failed to load signing identity')
        return
    }

    if (!certificate || !key) {
        res.status(500).send('Failed to load signing identity')
        return
    }

    // From https://github.com/walletpass/pass-js/blob/2b6475749582ca3ea742a91466303cb0eb01a13a/src/lib/signManifest-forge.ts#L42
    const p7 = forge.pkcs7.createSignedData();
    p7.content = JSON.stringify(manifestJson);
    p7.addCertificate(certificate);
    p7.addCertificate(APPLE_CA_CERTIFICATE);
    p7.addSigner({
        key: forge.pki.privateKeyToPem(key),
        certificate,
        digestAlgorithm: forge.pki.oids.sha1,
        authenticatedAttributes: [
        {
            type: forge.pki.oids.contentType,
            value: forge.pki.oids.data,
        },
        {
            type: forge.pki.oids.messageDigest,
            // value will be auto-populated at signing time
        },
        {
            type: forge.pki.oids.signingTime,
            // value will be auto-populated at signing time
            // value: new Date('2050-01-01T00:00:00Z')
        },
        ],
    });

    /**
     * Creating a detached signature because we don't need the signed content.
     */
    p7.sign({ detached: true });

    let signature = Buffer.from(forge.asn1.toDer(p7.toAsn1()).getBytes(), 'binary');

    res.type('application/octet-stream')
    res.status(200).send(signature)
});


/*
 * Fetch CSV formatted FAQs server-sided
 *
 */

var faqCache = {};

app.get('/faq', async (req, res) => {
    const locale = req.query.locale === 'de' ? 'de' : 'en'

    function isExpired(date) {
        return ((new Date) - date) > FAQ_CACHE_DURATION;
    }

    if ( !(locale in faqCache) || isExpired(faqCache[locale].added) ) {
        try {
            const url = locale === 'de' ? FAQ_DATA_URL.DE : FAQ_DATA_URL.EN;
            const response = await axios.get(url);
            var faqs = [];

            // Parse CSV to [{ q: ..., a: ... }] format
            const rows = response.data.split(/\r\n|\n/);
            for (var i=1; i < rows.length; i++) {
                var d = rows[i].split(/"\s{0,1},\s{0,1}"/);
                if (d.length == 1) {
                    if (faqs.length-1 > -1 ) faqs[faqs.length-1].a += d;
                } else {
                    faqs.push({ q: d[0].replace(/^\"/, ''), a: d[1].replace(/\"$/, '') });
                }
            }
            faqCache[locale] = { added: new Date, data: faqs };
        } catch(e) {
            console.error(`Could not fetch FAQ data for locale ${locale}, falling back to cache`);
        }
    }

    res.type('application/json')
    if (locale in faqCache && 'data' in faqCache[locale])
        res.status(200).send(faqCache[locale].data)
    else
        res.status(200).send([
            locale === 'de' ?
                { q: 'Fehler', a: 'Da ging etwas schief, versuche es später erneut'}
            :
                { q: 'Error', a: 'Something went wrong, please try again later'}
        ])
});

module.exports = app