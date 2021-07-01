<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl">

    <div class="flex flex-row justify-start">
      <Logo class="pr-2 flex-shrink-0"/>
      <div class="inline-block text-2xl text-primary">
        <h1 class="font-medium">{{ $t('index.title') }}</h1>
        <h2 class="">{{ $t('index.subtitle') }}</h2>
      </div>
    </div>

    <div v-if="state == 0">
      <form @submit.prevent="consented" class="flex flex-col space-y-6 pt-2">
        
        <div>
          <p v-for=" p in $t('index.consent.paragraphs')" v-bind:key="p" class="" v-html="p" />
          <div class="flex flex-row justify-around break-normal space-x-4">
            
            <a href="https://github.com/philipptrenz/covidpass/" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.noStorage')">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M42 30C42 28.8954 41.1046 28 40 28H8C6.89543 28 6 28.8954 6 30V34C6 35.1046 6.89543 36 8 36H40C41.1046 36 42 35.1046 42 34V30ZM41.7889 26.0498C41.8618 26.1958 41.9164 26.3495 41.9518 26.5077C41.3745 26.1843 40.7087 26 40 26H8C7.29125 26 6.62555 26.1843 6.04824 26.5077C6.08361 26.3495 6.13819 26.1958 6.21115 26.0498L12.6833 13.1056C13.0221 12.428 13.7146 12 14.4721 12H33.5279C34.2854 12 34.9779 12.428 35.3167 13.1056L41.7889 26.0498ZM44 30V26.9443C44 26.3233 43.8554 25.7108 43.5777 25.1554L37.1056 12.2111C36.428 10.856 35.043 10 33.5279 10H14.4721C12.957 10 11.572 10.856 10.8944 12.2111L4.42229 25.1554C4.14458 25.7108 4 26.3233 4 26.9443V30V34C4 36.2091 5.79086 38 8 38H40C42.2091 38 44 36.2091 44 34V30Z" fill="white"/>
                  <rect x="4.58579" y="40" width="50" height="4" rx="2" transform="rotate(-45 4.58579 40)" fill="white" stroke="#27215B" stroke-width="2"/>
                </svg>
              </Icon>
            </a>
            
            <a href="https://github.com/philipptrenz/covidpass/" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.noProfit')">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7313 10.269C24.0155 9.72882 21.2006 10.0061 18.6424 11.0657C16.0843 12.1253 13.8978 13.9197 12.3594 16.222C11.5777 17.3919 10.9813 18.6662 10.5836 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H10.1436C10.0484 22.6597 10 23.328 10 24C10 24.672 10.0484 25.3403 10.1436 26H19C19.5523 26 20 26.4477 20 27C20 27.5523 19.5523 28 19 28H10.5836C10.9813 29.3338 11.5777 30.6081 12.3594 31.778C13.8978 34.0803 16.0843 35.8747 18.6424 36.9343C21.2006 37.994 24.0155 38.2712 26.7313 37.731C29.447 37.1908 31.9416 35.8574 33.8995 33.8995C34.29 33.509 34.9232 33.509 35.3137 33.8995C35.7042 34.29 35.7042 34.9232 35.3137 35.3137C33.0761 37.5514 30.2251 39.0752 27.1214 39.6926C24.0177 40.3099 20.8007 39.9931 17.8771 38.7821C14.9534 37.5711 12.4546 35.5203 10.6965 32.8891C9.69211 31.386 8.95526 29.732 8.50806 28H5C4.44772 28 4 27.5523 4 27C4 26.4477 4.44772 26 5 26H8.12548C8.0422 25.339 8 24.6711 8 24C8 23.3289 8.0422 22.661 8.12548 22H5C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20H8.50807C8.95526 18.2681 9.69211 16.614 10.6965 15.1109C12.4546 12.4797 14.9534 10.4289 17.8771 9.21794C20.8007 8.00693 24.0177 7.69008 27.1214 8.30744C30.2251 8.92481 33.0761 10.4487 35.3137 12.6863C35.7042 13.0768 35.7042 13.71 35.3137 14.1005C34.9232 14.491 34.29 14.491 33.8995 14.1005C31.9416 12.1426 29.447 10.8092 26.7313 10.269Z" fill="white"/>
                  <rect x="4.58579" y="40" width="50" height="4" rx="2" transform="rotate(-45 4.58579 40)" fill="white" stroke="#27215B" stroke-width="2"/>
                </svg>
              </Icon>
            </a>

            <a href="https://github.com/philipptrenz/covidpass/" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.openSource')">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 1.92C18.842 1.92 13.8467 3.72581 9.88106 7.02409C5.91538 10.3224 3.22958 14.9049 2.2897 19.9766C1.34982 25.0483 2.21518 30.2889 4.73563 34.7892C7.09936 39.0097 10.7788 42.3292 15.1992 44.2502L19.9111 31.9724C18.3477 31.1706 17.0477 29.9229 16.1823 28.3776C15.1597 26.5514 14.8086 24.4248 15.1901 22.3668C15.5715 20.3088 16.6615 18.4493 18.2707 17.111C19.8799 15.7726 21.9069 15.0398 24 15.0398C26.0931 15.0398 28.1201 15.7726 29.7293 17.111C31.3385 18.4493 32.4285 20.3088 32.8099 22.3668C33.1914 24.4248 32.8403 26.5514 31.8177 28.3776C30.9523 29.9229 29.6523 31.1706 28.0889 31.9724L32.8008 44.2502C37.2212 42.3292 40.9006 39.0097 43.2644 34.7892C45.7848 30.2889 46.6502 25.0483 45.7103 19.9766C44.7704 14.9049 42.0846 10.3224 38.1189 7.02409C34.1533 3.72581 29.158 1.92 24 1.92ZM8.65332 5.54792C12.9638 1.96284 18.3935 0 24 0C29.6065 0 35.0362 1.96284 39.3467 5.54792C43.6572 9.13301 46.5765 14.1141 47.5982 19.6268C48.6198 25.1394 47.6792 30.8358 44.9395 35.7274C42.1999 40.619 37.8342 44.3971 32.6 46.4062C32.3623 46.4974 32.0981 46.4905 31.8655 46.3869C31.6329 46.2833 31.4509 46.0916 31.3597 45.8539L25.9709 31.8123C25.781 31.3173 26.0282 30.7621 26.5231 30.5721C28.0584 29.9827 29.3389 28.8744 30.1425 27.4395C30.946 26.0047 31.2218 24.3337 30.9221 22.7167C30.6224 21.0997 29.766 19.6387 28.5016 18.5871C27.2372 17.5356 25.6445 16.9598 24 16.9598C22.3555 16.9598 20.7628 17.5356 19.4984 18.5871C18.234 19.6387 17.3776 21.0997 17.0779 22.7167C16.7782 24.3337 17.054 26.0046 17.8576 27.4395C18.6611 28.8744 19.9416 29.9827 21.4769 30.5721C21.9718 30.7621 22.219 31.3173 22.0291 31.8123L16.6403 45.8539C16.5491 46.0916 16.3671 46.2833 16.1345 46.3869C15.9019 46.4905 15.6377 46.4974 15.4 46.4062C10.1658 44.3971 5.80008 40.619 3.06046 35.7274C0.320851 30.8358 -0.619766 25.1394 0.401844 19.6268C1.42345 14.1141 4.34281 9.13301 8.65332 5.54792Z" fill="white"/>
                </svg>
              </Icon>
            </a>

          </div>
        </div>

        <div class="flex flex-row ">
          <span class="flex flex-row justify-center" :class="!consentGiven && hintNotConsented ? 'text-error': ''">
            <input type="checkbox" v-model="consentGiven" :class="!consentGiven && hintNotConsented ? 'border-error': 'border-primary'" class="flex-shrink-0 check-background h-6 w-6 text-gray border-2 rounded-md bg-white checked:bg-primary appearance-none focus:outline-none">
            <span class="ml-2 md" v-html="this.$t('index.consent.inputText')"></span>
          </span>
        </div>

        <button class="bg-primary bg-opacity-20 text-primary text-xl font-medium rounded-lg py-5 px-3 focus:outline-none" >
          <span >
            <svg class="inline-block" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.5H8V20.5H20V8.5ZM8 6.5C6.89543 6.5 6 7.39543 6 8.5V20.5C6 21.6046 6.89543 22.5 8 22.5H20C21.1046 22.5 22 21.6046 22 20.5V8.5C22 7.39543 21.1046 6.5 20 6.5H8ZM12 13C12 12.7239 12.2239 12.5 12.5 12.5H15.5C15.7761 12.5 16 12.7239 16 13V16C16 16.2761 15.7761 16.5 15.5 16.5H12.5C12.2239 16.5 12 16.2761 12 16V13ZM26.5 26.5C26.2239 26.5 26 26.7239 26 27V30C26 30.2761 26.2239 30.5 26.5 30.5H29.5C29.7761 30.5 30 30.2761 30 30V27C30 26.7239 29.7761 26.5 29.5 26.5H26.5ZM26.5 38.5C26.2239 38.5 26 38.7239 26 39V42C26 42.2761 26.2239 42.5 26.5 42.5H29.5C29.7761 42.5 30 42.2761 30 42V39C30 38.7239 29.7761 38.5 29.5 38.5H26.5ZM32 33C32 32.7239 32.2239 32.5 32.5 32.5H35.5C35.7761 32.5 36 32.7239 36 33V36C36 36.2761 35.7761 36.5 35.5 36.5H32.5C32.2239 36.5 32 36.2761 32 36V33ZM38.5 38.5C38.2239 38.5 38 38.7239 38 39V42C38 42.2761 38.2239 42.5 38.5 42.5H41.5C41.7761 42.5 42 42.2761 42 42V39C42 38.7239 41.7761 38.5 41.5 38.5H38.5ZM38 27C38 26.7239 38.2239 26.5 38.5 26.5H41.5C41.7761 26.5 42 26.7239 42 27V30C42 30.2761 41.7761 30.5 41.5 30.5H38.5C38.2239 30.5 38 30.2761 38 30V27ZM8 28.5H20V40.5H8V28.5ZM6 28.5C6 27.3954 6.89543 26.5 8 26.5H20C21.1046 26.5 22 27.3954 22 28.5V40.5C22 41.6046 21.1046 42.5 20 42.5H8C6.89543 42.5 6 41.6046 6 40.5V28.5ZM12.5 32.5C12.2239 32.5 12 32.7239 12 33V36C12 36.2761 12.2239 36.5 12.5 36.5H15.5C15.7761 36.5 16 36.2761 16 36V33C16 32.7239 15.7761 32.5 15.5 32.5H12.5ZM40 8.5H28V20.5H40V8.5ZM28 6.5C26.8954 6.5 26 7.39543 26 8.5V20.5C26 21.6046 26.8954 22.5 28 22.5H40C41.1046 22.5 42 21.6046 42 20.5V8.5C42 7.39543 41.1046 6.5 40 6.5H28ZM32 13C32 12.7239 32.2239 12.5 32.5 12.5H35.5C35.7761 12.5 36 12.7239 36 13V16C36 16.2761 35.7761 16.5 35.5 16.5H32.5C32.2239 16.5 32 16.2761 32 16V13Z" fill="#27215B"/>
            </svg>
            {{ $t('index.consent.buttonText') }}
          </span>
        </button>
      </form>
    </div>

    <div v-show="state == 1">
      <div class="bg-primary bg-opacity-20 text-primary text-xl rounded-lg focus:outline-none text-center font-medium">
        <client-only>
          <qrcode-stream 
            v-if="!qrScannerDestroyed"
            @decode="onDecode" 
            @init="onInit" 
            :camera="state == 1 ? 'auto' : 'off'"
            :track="undefined"
            class="min-h-sm ">

            <div v-if="!qrScannerDestroyed && !qrScannerLoading && !qrScannerError" class="absolute top-0 left-0 w-full h-full z-50 flex flex-col justify-center align-middle p-6 text-white font-medium">
              <svg class="w-full h-full" viewBox="0 0 300 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22.5V2.5H22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M298 278.008V298.008H278" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M278 2.00806L298 2.00806V22.0081" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 298.008H2L2 278.008" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="pt-2">{{ scanHint }}</span>
            </div>
            <div v-if="!qrScannerDestroyed && !qrScannerLoading && !qrScannerError" class="absolute top-0 left-0 w-full h-full z-40 bg-primary opacity-40"></div>

            <div class="h-full flex flex-col justify-end space-y-2 p-5">

              <div class="flex-grow flex flex-col justify-center rounded-xl">

                <div class="text-medium text-center" v-if="qrScannerLoading">
                  {{ $t('labels.loading') }}
                </div>

                <div v-if="qrScannerError" class="h-full text-highlight text-sm text-center font-medium p-2 flex items-center justify-center">
                  <p>{{ qrScannerError }}</p>
                </div>

              </div>

              <button v-if="qrScannerError" @click="reloadQRScanner" class="w-full text-sm rounded-lg border-primary border-2 p-1 font-medium focus:outline-none">{{ $t('labels.tryAgain') }}</button>
              
            </div>

          </qrcode-stream>
        </client-only>
      </div>
    </div>

    <div v-show="state == 2 || state == 3" class="space-y-6">

      <div v-if="state == 2" class="bg-primary bg-opacity-20 text-primary text-xl rounded-lg py-5 px-3 focus:outline-none">
        <div class="flex justify-center align-middle">
          <div class="inline-block my-auto ">
            <span class="inline-block font-medium align-middle">
              <svg class="inline-block" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 24L18.5 36L40.5 14" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ $t('index.addToWallet.successMessage') }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col bg-primary text-white text-xl rounded-lg p-4 focus:outline-none space-y-4 ">
        
        <h1 class="">
          <span class="pl-2 inline-block align-middle font-semibold">
            <svg class="inline-block" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2801 11.0823L33.3333 15.6231L35.3865 11.0823L37.9468 12.5604L35.0408 16.6088L40 16.1164V19.0728L35.0407 18.5804L37.9468 22.6293L35.3864 24.1074L33.3333 19.5662L31.2802 24.1074L28.7198 22.6293L31.6259 18.5804L26.6666 19.0728V16.1164L31.6258 16.6088L28.7198 12.5604L31.2801 11.0823Z" fill="white"/>
            </svg>
            {{ $t('index.addToWallet.passTitle') }}
          </span>
        </h1>

        <div class="flex flex-row align-middle justify-center">
          <a ref="download" @click="downloaded" >
            <img :src="walletBadgeIcon" />
          </a>
        </div>

        <div class="pb-24">
          <p class="font-light text-xs leading-5" v-html="$t('index.addToWallet.note')"></p>
        </div>

      </div>

      <div v-if="state == 3" @click="tellYourFriends" class="cursor-pointer bg-primary bg-opacity-20 text-primary text-xl rounded-lg p-4 focus:outline-none" >
        <div class="flex justify-center align-middle">
          <div class="inline-block my-auto">
            <span class="inline-block font-medium align-middle px-2">
              <svg class="inline-block" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7071 3.29289C24.3166 2.90237 23.6834 2.90237 23.2929 3.29289L16.9289 9.65685C16.5384 10.0474 16.5384 10.6805 16.9289 11.0711C17.3195 11.4616 17.9526 11.4616 18.3431 11.0711L23 6.41421V22C23 22.5523 23.4477 23 24 23C24.5523 23 25 22.5523 25 22V6.41421L29.6569 11.0711C30.0474 11.4616 30.6805 11.4616 31.0711 11.0711C31.4616 10.6805 31.4616 10.0474 31.0711 9.65685L24.7071 3.29289ZM14 19C14 17.3431 15.3431 16 17 16H19.6C20.1523 16 20.6 15.5523 20.6 15C20.6 14.4477 20.1523 14 19.6 14H17C14.2386 14 12 16.2386 12 19V33C12 35.7614 14.2386 38 17 38H31C33.7614 38 36 35.7614 36 33V19C36 16.2386 33.7614 14 31 14H28.4C27.8477 14 27.4 14.4477 27.4 15C27.4 15.5523 27.8477 16 28.4 16H31C32.6569 16 34 17.3431 34 19V33C34 34.6569 32.6569 36 31 36H17C15.3431 36 14 34.6569 14 33V19Z" fill="#27215B"/>
              </svg>
              {{ $t('index.addToWallet.shareButtonText') }}
            </span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

enum State {
  NONE = 0,
  CONSENTED = 1,
  SCANNED = 2,
  DOWNLOADED = 3,
}

export default Vue.extend({
  layout: 'main',
  data() {
    return {
      state: State.NONE,
      consentGiven: false,
      hintNotConsented: false,
      qrScannerLoading: false,
      qrScannerDestroyed: false,
      qrScannerError: <string|null>null,
      scanHint: this.$t('index.scan.hint'),
    }
  },
  computed: {
    walletBadgeIcon() {
      try {
        const locale = this.$i18n.locale
        return require(`assets/wallet-badges/Add_to_Apple_Wallet_rgb_${ locale.toUpperCase() }.svg`)
      } catch {
        return require(`assets/wallet-badges/Add_to_Apple_Wallet_rgb_US-UK.svg`)
      }
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
      else 
        this.hintNotConsented = true;
    },
    onDecode(rawData: string) {
      try {
        const decoded = this.$hcertDecode(rawData)
        this.generate(rawData, decoded)
      } catch (error) {
        this.scanHint = this.$t('index.scan.errorHint')
        console.error('Invalid QR code found');
        this.reloadQRScanner();

        // TODO: Prompt user for wrong QR Code

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
    async generate(rawData: String, decodedData: String) {

      try {
        const pass = await this.$createPass({
            decoded: decodedData, 
            raw: rawData
          })
        
        if (!pass) {
          console.error('Error:', "Something went wrong.")

          // TODO: Prompt user

        } else {
          const passBlob = new Blob([pass], {type: "application/vnd.apple.pkpass"});
          const url = window.URL.createObjectURL(passBlob);
          const link = <HTMLLinkElement>this.$refs.download;
          link.href = url;
          link.setAttribute('download', `covidpass-${ this.randomId(8) }.pkpass`);

          this.state = State.SCANNED;
        }
      } catch (e) {
        console.error('Error:', e.message)
      }
    },
    downloaded() {
      this.state = State.DOWNLOADED
    },
    async tellYourFriends() {
      const shareData = {
        title: document.title,
        text: this.$t('index.title') + ' – ' + this.$t('index.subtitle'),
        url: window.location.protocol + "//" + window.location.host,
      }
      try {
        await navigator.share(shareData)
        console.log("successfully shared")
      } catch(err) {
        console.error('Sharing failed: ' + err)
      }
    },
    randomId(length: number) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  }
})
</script>

<style scoped>
.check-background:checked {
  background-image: url("data:image/svg+xml; utf8, <svg viewBox='-4 -6 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 7L5 11L15 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
