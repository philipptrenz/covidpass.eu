<template>
  <div class="m-auto flex flex-col space-y-4 max-w-sm">

    <h1 class="text-2xl font-bold">Add your <i>EU Digital Green Certificate</i> to your Apple Wallet</h1>

    <Tile :step="1" title="Consent" :outerState="state" @to-step="toStep">
      <form @submit.prevent="consented" class="flex flex-col space-y-3 pt-2">
    
        <p class="text-sm">
          Your QR Code contains sensitive personal data. These data have to be read and transmitted to our server to be embedded into your Apple Wallet Pass. 
          <br />
          We will use your provided data from the QR Code solely for creating the Apple Wallet Pass. We do not store, give away or sell your sensitive information.
          Please use the Wallet Pass responsibly, it is intended only for you personally.
          
          <!--<br />
          This web application is built with privacy in mind, without tracking or advertisement. The source code is publicly available at 
          <a href="https://github.com/philipptrenz.de/123" class="underline">Github</a> to be reviewed by others.-->
        </p>

        <div class="text-sm">
          <input type="checkbox" v-model="consentGiven">
          <span class="ml-1 font-bold">I consent to the processing of my sensitive data</span>
        </div>

        <button class="bg-black text-white text-sm rounded-lg p-1 font-bold focus:outline-none">Next</button>

      </form>
    </Tile>


    <Tile :step="2" title="Scan your certificate (QR Code)" :outerState="state" @to-step="toStep">

      <client-only>
        <qrcode-stream 
          v-if="!qrScannerDestroyed"
          @decode="onDecode" 
          @init="onInit" 
          :camera="state == 2 ? 'auto' : 'off'"
          :track="undefined"
          class="min-h-sm">

          <div class="h-full flex flex-col justify-end space-y-2">

            <div class="flex-grow flex flex-col justify-center">

              <div class="text-bold text-center" v-if="qrScannerLoading">
                Loading...
              </div>

            </div>

              <div v-if="qrScannerError" class="bg-highlight opacity-80 text-white font-bold p-2 rounded-xl">
                <p class="">{{ qrScannerError }}</p>
              </div>

            <button v-if="qrScannerError" @click="reloadQRScanner" class="w-full bg-black text-white text-sm rounded-lg p-1 font-bold focus:outline-none">Try again</button>
            
          </div>

        </qrcode-stream>
      </client-only>

    </Tile>


    <Tile :step="3" title="Add to your Wallet" :outerState="state" @to-step="toStep">
      <div class="h-full flex flex-col justify-end pt-2 space-y-5">

        <a ref="download">
          <div class="bg-walletGray flex flex-row p-3 rounded-xl">
            <img src="~/static/wallet-icon.png" class="inline-block h-9 mr-3">
            <div class="self-center text-left text-walletText font-bold leading-3 -pt-1">
              <span class="text-sm">Add to</span>
              <br/>
              <span class="leading-4">Apple Wallet</span>
            </div>
          </div>
        </a>

        <p class="text-sm">

          <b>Note:</b> 
          To protect your data, please make sure that your Pass is not visible when your phone is locked. If necessary, you can 
          change this setting under <i>Settings</i> > <i>Touch / Face ID & Passcode</i> > <i>Allow access when locked</i>.
        </p>

      </div>
    </Tile>


  </div>
</template>

<script lang="ts">
import Vue from 'vue';

enum State {
  NONE = 1,
  CONSENTED = 2,
  SCANNED = 3,
}

export default Vue.extend({
  data() {
    return {
      state: State.NONE,
      consentGiven: false,
      qrScannerLoading: false,
      qrScannerDestroyed: false,
      qrScannerError: <string|null>null,
    }
  },
  methods: {
    toStep(step: State) {
      if (this.state > step) {
        this.state = step;
      }
        
    },
    consented() {
      if (this.consentGiven)
        this.state = State.CONSENTED;
    },
    onDecode(data: string) {
      if (data) {
        this.generate(data)
      }
    },
    async onInit (promise: Promise<any>) {
      this.qrScannerLoading = true;
      this.qrScannerError = null;
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.qrScannerError = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.qrScannerError = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.qrScannerError = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.qrScannerError = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.qrScannerError = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.qrScannerError = "ERROR: Stream API is not supported in this browser"
        }
      } finally {
        this.qrScannerLoading = false;
      }
    },
    async reloadQRScanner () {
      this.qrScannerDestroyed = true
      await this.$nextTick()
      this.qrScannerDestroyed = false
    },
    async generate(data: String) {
      
      if (!data) {
        console.error("No qr code scanned")
        return
      }

      const apiUrl = document.location.href + 'api/generate'

      await this.$axios.$post(apiUrl, { data: data }, { responseType: 'blob' })
        .then(res => {
          if (!res) {
            throw Error("No response data received");
          }
          const blob = new Blob([res], { type: "application/vnd.apple.pkpass" });
          const url = window.URL.createObjectURL(blob);
          const link = <HTMLLinkElement>this.$refs.download;
          link.href = url;
          link.setAttribute('download', 'eudcc.pkpass');

          this.state = State.SCANNED;
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    },
  }
})
</script>