# dgc2pkpass

## Add and convert certificate

Add your `.cer` file from the [iOS Provisioning Portal](the iOS Provisioning Portal) to your Keychain and export  as `.p12` to the `./keys` folder, named by your Pass ID (e.g. `com.example.myNewPass.p12`). Then run the following command to convert to `.pem` as well as to automatically load the needed `wwdr.pem` certificate:

```bash
node_modules/passbook/bin/node-passbook prepare-keys -p keys
```

## Set environment variables

```bash
PASS_ORGANIZATION_NAME=  # Your organization name
PASS_TYPE_IDENTIFIER=    # Your Pass ID
PASS_TEAM_IDENTIFIER=    # Your Developer Team identifier
PASS_CERT_SECRET=        # The .pem secret you set when converting your signing certificate from .p12 to .pem
PASS_SERIAL_NUMBER=      # The serial number of your Apple Wallet Pass
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Deploy with Docker Compose

```bash
docker-compose build  # build container
docker-compose up -d  # run container
```

The container must be run behind a reverse proxy (e.g. nginx), which provides SSL and redirects all traffic to HTTPS.



