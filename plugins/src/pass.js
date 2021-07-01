'use strict';

const utils = require('./utils')
const consts = require('./constants')

const { Payload, CertificateType } = require('./payload')
const { toBuffer } = require('do-not-zip')
const crypto = require('crypto')

exports.createPass = async function(data) {

  /* Functions */

  function randomId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function getBufferHash(buffer) {
    // creating hash
    const sha = crypto.createHash('sha1');
    sha.update(buffer);
    return sha.digest('hex');
  }

  async function signPassWithRemote(pass, payload) {
    // From pass-js
    // https://github.com/walletpass/pass-js/blob/2b6475749582ca3ea742a91466303cb0eb01a13a/src/pass.ts

    // Creating new Zip file
    const zip = []

    // Adding required files
    // Create pass.json
    zip.push({ path: 'pass.json', data: Buffer.from(JSON.stringify(pass)) })
    const passHash = getBufferHash(Buffer.from(JSON.stringify(pass)))

    zip.push({ path: 'icon.png', data: payload.icon })
    zip.push({ path: 'icon@2x.png', data: payload.icon2x })
    zip.push({ path: 'logo.png', data: payload.logo })
    zip.push({ path: 'logo@2x.png', data: payload.logo2x })

    // adding manifest
    const manifestJson = JSON.stringify(
      zip.reduce(
        (res, { path, data }) => {
          res[path] = getBufferHash(data);
          return res;
        },
        {},
      ),
    );
    zip.push({ path: 'manifest.json', data: manifestJson });
    
    const response = await fetch('/api/sign', {
        method: 'POST',
        headers: {
          'Accept': 'application/octet-stream',
          'Content-Type': 'application/json'
        },
        body: manifestJson,
    })

    if (response.status !== 200) {
      console.error(response)
      return undefined
    }

    const manifestSignature = await response.arrayBuffer()

    zip.push({ path: 'signature', data: Buffer.from(manifestSignature) });

    // finished!
    return toBuffer(zip);
  }

  function createPassSecondaryAndAuxiliaryFields(payload) {
    if (payload.certificateType == consts.CERTIFICATE_TYPE.VACCINATION) {
      return {
        secondaryFields: [
          {
            key: "dose",
            label:  window.$nuxt.$t('pass.dose'),
            value: payload.dose
          },
          {
            key: "dov",
            label: window.$nuxt.$t('pass.dateOfVaccination'),
            value: payload.dateOfVaccination,
            textAlignment: "PKTextAlignmentRight"
          }
        ],
        auxiliaryFields: [
          {
            key: "vaccine",
            label: window.$nuxt.$t('pass.vaccine'),
            value: payload.vaccineName
          },
          {
            key: "dob",
            label: window.$nuxt.$t('pass.dateOfBirth'),
            value: payload.dateOfBirth,
            textAlignment: "PKTextAlignmentRight"
          }
        ]
      }
    } else if (payload.certificateType == consts.CERTIFICATE_TYPE.TEST) {
      return {
        secondaryFields: [
        
        ],
        auxiliaryFields: [
          {
            key: "dob",
            label: window.$nuxt.$t('pass.dateOfBirth'),
            value: payload.dateOfBirth,
            textAlignment: "PKTextAlignmentRight"
          }
        ]
      }
    } else if (payload.certificateType == consts.CERTIFICATE_TYPE.RECOVERY) {
      return {
        secondaryFields: [
        
        ],
        auxiliaryFields: [
          {
            key: "dob",
            label: window.$nuxt.$t('pass.dateOfBirth'),
            value: payload.dateOfBirth,
            textAlignment: "PKTextAlignmentRight"
          }
        ]
      }
    }

  }

  /* Execution */

  let valueSets

  try {
    valueSets = await utils.getValueSets()
  } catch (e) {
    console.error(e)
    return undefined
  }

  let payload

  try {
    payload = new Payload(data, valueSets)
  } catch (e) {
    console.error("Extracting payload failed:", e)
    return undefined
  }

  const qrCode = {
    message: payload.raw,
    format: "PKBarcodeFormatQR",
    messageEncoding: "utf-8"
  }

  const passName = "COVID Pass"
  const serialNumber = payload.uvci + randomId(8) // TODO: Create serialNumber from hash 
  const passSpecificFields = createPassSecondaryAndAuxiliaryFields(payload)

  const pass = {
    passTypeIdentifier: window.$nuxt.$config.passIdentifier,
    teamIdentifier: window.$nuxt.$config.teamIdentifier,
    sharingProhibited: true,
    voided: false,
    formatVersion: 1,
    logoText: passName,
    organizationName: passName,
    description: passName,
    labelColor: payload.labelColor,
    foregroundColor: payload.foregroundColor,
    backgroundColor: payload.backgroundColor,
    serialNumber: serialNumber,
    barcodes: [qrCode],
    barcode: qrCode,
    generic: {
      headerFields: [
        {
          key: "type",
          label: window.$nuxt.$t('pass.certificateType.label'),
          value: window.$nuxt.$t(`pass.certificateType.${ payload.certificateType.toLowerCase() }`)
        }
      ],
      primaryFields: [
        {
          key: "name",
          label: window.$nuxt.$t('pass.name'),
          value: payload.name
        }
      ],
      secondaryFields: passSpecificFields.secondaryFields,
      auxiliaryFields: passSpecificFields.auxiliaryFields,
      backFields: [
        {
          key: "uvci",
          label: window.$nuxt.$t('pass.uniqueCertificateIdentifier'),
          value: payload.uvci
        },
        {
          key: "issuer",
          label: window.$nuxt.$t('pass.certificateIssuer'),
          value: payload.certificateIssuer
        },
        {
          key: "country",
          label: window.$nuxt.$t('pass.country'),
          value: payload.country
        },
        {
          key: "disclaimer",
          label: window.$nuxt.$t('pass.disclaimer.label'),
          value: window.$nuxt.$t('pass.disclaimer.value'),
        }
      ]
    }

  };

  return await signPassWithRemote(pass, payload)
}
