import express from 'express';
import cors from 'cors';
import forge from 'node-forge';
import crypto from 'crypto';
import fs from 'fs';

import img from '../plugins/src/img'

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000']

const CERT = fs.readFileSync(`./keys/${ process.env.PASS_TYPE_IDENTIFIER.substring(5) }.pem`)
const CERT_PASSPHRASE = process.env.PASS_CERT_SECRET
const APPLE_CA_CERTIFICATE = forge.pki.certificateFromPem(fs.readFileSync('./keys/wwdr.pem'))

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

app.use(cors({
    origin: function(origin, callback) {
        if (ALLOWED_ORIGINS.indexOf(origin) === -1) {
            console.warn("Received request on /api/sign from unallowed origin", origin)
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.'
            return callback(new Error(msg), false)
        }
        return callback(null, true)
    }
}))
app.use(express.json())

app.post('/sign', async (req, res) => {

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

module.exports = app