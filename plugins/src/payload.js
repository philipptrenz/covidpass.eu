const img = require('./img')
const consts = require('./constants')

exports.Payload = class {

  constructor(body, valueSets) {

    const rawData = body["raw"]
    const decoded = body["decoded"]

    this.backgroundColor = 'rgb(39,33,91)'
    this.labelColor = 'rgb(255,255,255)'
    this.foregroundColor = 'rgb(255,255,255)'
    this.icon = img.icon
    this.icon2x = img.icon2x
    this.logo = img.logo
    this.logo2x = img.logo2x

    this.raw = rawData

    if (typeof rawData === 'undefined') {
      throw new Error('No raw payload')
    }

    if (typeof decoded === 'undefined') {
      throw new Error('No decoded payload')
    }

    const nam = decoded["-260"]["1"]["nam"]
    if (typeof nam === 'undefined') {
      throw new Error('Failed to read name')
    }

    const firstName = nam["gn"]
    const lastName = nam["fn"]
    
    this.name = lastName + ', ' + firstName

    const dob = decoded["-260"]["1"]["dob"]
    if (typeof dob === 'undefined') {
      throw new Error('Failed to read date of birth')
    }

    this.dateOfBirth = dob


    const innerData = decoded["-260"]["1"]

    if ("v" in innerData) {
      const vacc = innerData["v"][0]
      this.parseVaccinationData(vacc, valueSets)
    } else if ("t" in innerData) {
      const test = innerData["t"][0]
      this.parseTestData(test, valueSets)
    } else if ("r" in innerData) {
      const recovery = innerData["r"][0]
      this.parseRecoveryData(recovery, valueSets)
    } else {
      throw new Error('This certificate type is not supported')
    }
  }

  parseVaccinationData(v, valueSets) {

    if (typeof v === 'undefined') {
      throw new Error('Failed to read vaccination information')
    }

    this.certificateType = consts.CERTIFICATE_TYPE.VACCINATION

    /* General data */

    this.uvci = v["ci"]
    this.certificateIssuer = v["is"]

    const countryCodes = valueSets.countryCodes["valueSetValues"]
    const countryCode = v["co"]
    if(!(countryCode in countryCodes)) {
      throw new Error('Invalid country code')
    }
    this.country = countryCodes[countryCode].display

    /* Vacc specific data */
    
    const doseIndex = v["dn"]
    const totalDoses = v["sd"]
    this.dose = doseIndex + '/' + totalDoses
    this.dateOfVaccination = v["dt"]

    const medicalProducts = valueSets.medicalProducts["valueSetValues"]
    
    const manufacturers = valueSets.manufacturers["valueSetValues"]

    const medicalProductKey = v["mp"]
    if(!(medicalProductKey in medicalProducts)) {
      throw new Error('Invalid medical product key')
    }

    this.medicalProductKey = medicalProductKey

    const manufacturerKey = v["ma"]
    if(!(manufacturerKey in manufacturers)) {
      throw new Error('Invalid manufacturer')
    }

    
    this.vaccineName = medicalProducts[medicalProductKey].display
    this.manufacturer = manufacturers[manufacturerKey].display
  }

  parseTestData(t, valueSets) {
    if (typeof t === 'undefined') {
      throw new Error('Failed to read test information')
    }
    this.certificateType = consts.CERTIFICATE_TYPE.TEST

    /* General data */

    this.uvci = t["ci"]
    this.certificateIssuer = t["is"]

    const countryCodes = valueSets.countryCodes["valueSetValues"]
    const countryCode = t["co"]
    if(!(countryCode in countryCodes)) {
      throw new Error('Invalid country code')
    }
    this.country = countryCodes[countryCode].display
    
    /* Test specific data */

    /*
     TODO: Fill data, example:

     {
      "ci": "URN:UVCI:01DE/IZ12345A/5CWLU12RNOB9RXSEOP6FG8#W",
      "co": "DE",
      "is": "Robert Koch-Institut",
      "tg": "840539006",

      "tt": "LP217198-3",
      "sc": "2021-05-30T10:12:22Z",
      "dr": "2021-05-30T10:30:15Z",
      "tr": "260415000",
      "tc": "Testzentrum Köln Hbf"
    }

    */
  }

  parseRecoveryData(r, valueSets) {
    if (typeof r === 'undefined') {
      throw new Error('Failed to read test information')
    }

    this.certificateType = consts.CERTIFICATE_TYPE.RECOVERY

    /* General data */

    this.uvci = r["ci"]
    this.certificateIssuer = r["is"]

    const countryCodes = valueSets.countryCodes["valueSetValues"]
    const countryCode = r["co"]
    if(!(countryCode in countryCodes)) {
      throw new Error('Invalid country code')
    }
    this.country = countryCodes[countryCode].display
    
    /* Recovery specific data */

    /*
     TODO: Fill data, example:

     {
      "ci": "URN:UVCI:01DE/5CWLU12RNOB9RXSEOP6FG8#W",
      "co": "DE",
      "is": "Robert Koch-Institut",
      "tg": "840539006",

      "fr": "2021-01-10",
      "df": "2021-05-29",
      "du": "2021-06-15"
    }

    */
  }
}
