<template>
  <div class="m-auto flex flex-col space-y-4 max-w-sm">

    <h1 class="text-2xl font-bold">{{ $t('index.title') }}</h1>

    <Tile :step="1" :title="$t('index.consent.title')" :outerState="state" @to-step="toStep">
      <form @submit.prevent="consented" class="flex flex-col space-y-3 pt-2">
    
        <p v-for=" p in $t('index.consent.paragraphs')" v-bind:key="p" class="text-sm" v-html="p" />

        <div class="text-sm">
          <input type="checkbox" v-model="consentGiven">
          <span class="ml-1 font-bold">{{ $t('index.consent.inputText') }}</span>
        </div>

        <button class="bg-black text-white text-sm rounded-lg p-1 font-bold focus:outline-none" v-html="$t('labels.next')" />

      </form>
    </Tile>


    <Tile :step="2" :title="$t('index.scan.title')" :outerState="state" @to-step="toStep">

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
                {{ $t('labels.loading') }}
              </div>

              <div v-if="qrScannerError" class="h-full border-highlight text-highlight text-sm border-2 text-center font-bold p-2 rounded-xl flex items-center justify-center">
                <p>{{ qrScannerError }}</p>
              </div>

            </div>

            <button v-if="qrScannerError" @click="reloadQRScanner" class="w-full bg-black text-white text-sm rounded-lg p-1 font-bold focus:outline-none">{{ $t('labels.tryAgain') }}</button>
            
          </div>

        </qrcode-stream>
      </client-only>

    </Tile>


    <Tile :step="3" :title="$t('index.addToWallet.title')" :outerState="state" @to-step="toStep">
      <div class="h-full flex flex-col justify-end pt-2 space-y-5">

        <a ref="download">
          <div class="bg-walletGray flex flex-row p-3 rounded-xl">
            <img src="~/static/wallet-icon.png" class="inline-block h-9 mr-3">
            <div class="self-center text-left text-walletText font-bold leading-3 -pt-1">
              <span class="text-sm">{{ $t('index.addToWallet.button.addTo') }}</span>
              <br/>
              <span class="leading-4">Apple Wallet</span>
            </div>
          </div>
        </a>

        <p class="text-sm" v-html="$t('index.addToWallet.note')"></p>

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
        const errorString = <string>this.$t( 'index.scan.errors.' + error.name )
        if (errorString) {
          this.qrScannerError = errorString
        } else { 
          this.qrScannerError = error.name
        }
        console.warn("qr code reader error:", error)
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

      const apiUrl = window.location.protocol + "//" + window.location.host + '/api/generate'

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