import express from 'express';
import passbook from 'passbook';

const app = express();
app.use(express.json())

const template = passbook("generic", {
    /* Required top level */
    description: "Forename Lastname Vaccination Cert.",
    organizationName: process.env.PASS_ORGANIZATION_NAME,
    passTypeIdentifier: process.env.PASS_TYPE_IDENTIFIER,
    teamIdentifier: process.env.PASS_TEAM_IDENTIFIER,
    serialNumber: process.env.PASS_SERIAL_NUMBER,

    /* Optional top level */
    backgroundColor: "rgb(255,255,255)",
    foregroundColor:  "rgb(0,0,0)",
    labelColor: "rgb(128,128,128)",
    logoText: "Vaccinaction Cert"
});

template.keys("./keys", process.env.PASS_CERT_SECRET);
template.loadImagesFrom("./assets/pass");


app.post('/generate', async (req, res) => {

    if (!req.body || !req.body.data) {
        console.log("Request did not contain qr code data.")
        res.status(400).send("Provide qr code data via json.");
        return
    }

    // see: https://developer.apple.com/library/archive/documentation/UserExperience/Reference/PassKit_Bundle/Chapters/TopLevel.html#//apple_ref/doc/uid/TP40012026-CH2-SW2
    var pass = template.createPass({
        barcodes: [{
            "message" : req.body.data,
            "format" : "PKBarcodeFormatQR",
            "messageEncoding" : "iso-8859-1"
        }]
    });
    
    pass.render(res, function(error, end) {
        if (error) {
            console.error(error);
        }
    });    
})

module.exports = app