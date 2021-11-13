<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl" id="content">

    <div class="text-2xl text-primary flex flex-row align-middle justify-start">
      
      <div class="w-10">
        <Logo v-if="state == 0 || state > 2" class="flex-shrink-0 w-8 pr-2"/>
        <button v-else @click="state = 0" class="inline-block focus:outline-none w-8 pr-2">
          <ChevronLeft class="w-8 h-8" />
        </button>
      </div>

      <div class="inline-block text-2xl text-primary">
        <h1> 
          <span class="font-medium">{{ $t('index.title') }}</span><br/>
          <span class="">{{ $t('index.subtitle') }}</span>
        </h1>
      </div>

    </div>
    

    <div v-show="state == 0" class="-mt-2">        
      <div>
        
        <div class="flex flex-row justify-around break-normal space-x-4 pb-8">
          
          <Icon :text="$t('index.onboarding.icons.withoutApp')">
            <img src="~assets/icons/no-app.svg" alt="No app needed icon" />
          </Icon>

          <Icon :text="$t('index.onboarding.icons.free')">
            <img src="~assets/icons/non-commercial.svg" alt="Non commercial icon" />
          </Icon>

          <Icon :text="$t('index.onboarding.icons.appleWatch')">
            <img src="~assets/icons/watch.svg" alt="Apple Watch icon" />
          </Icon>

        </div>
      </div>

      <p v-for=" p in $t('index.onboarding.paragraphs')" v-bind:key="p" class="" v-html="p" />

      <div v-if="$i18n.locale == 'de'" class="pt-6 flex flex-col space-y-2">
        <span class="font-bold">Bekannt aus</span>
        <div class="flex flex-row justify-start space-x-8 align-middle min-h-[42px]">
          <a class="self-center" target="_blank" 
            href="https://www.focus.de/digital/diese-apps-machen-es-moeglich-impfnachweis-auf-dem-smartphone-praktische-tipps-tricks-fuers-schnelle-laden_id_13467124.html">
            <img src="~/assets/logos/focus.svg" alt="Logo von Focus Online">
          </a>
          <a class="self-center" target="_blank" 
            href="https://www.chip.de/downloads/webapp-Covid-Pass-fuer-Apple-Wallet-erstellen_183693866.html">
            <img src="~/assets/logos/chip.svg" alt="Logo von Chip">
          </a>
          <a class="self-center" target="_blank" 
            href="https://www.iphone-ticker.de/covidpass-eu-webseite-uebertraegt-impfzertifikat-ins-iphone-wallet-176595/">
            <img src="~/assets/logos/ifun.svg" alt="Logo von ifun">
          </a>

        </div>
      </div>

      <Button :text="$t('labels.next')" @click="onboarded()" class="mt-8" >
        <ChevronDown />
      </Button>

    </div>

    <div v-show="state == 1">
      <form @submit.prevent="consented" class="flex flex-col space-y-6 pt-2">
        
        <div>
          <p v-for=" p in $t('index.consent.paragraphs')" v-bind:key="p" class="" v-html="p" />
          <div class="flex flex-row justify-around break-normal space-x-4">
            
            <a href="https://github.com/philipptrenz/covidpass/" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.noStorage')">
                <img src="~assets/icons/no-cloud.svg" alt="No cloud icon" />
              </Icon>
            </a>
            
            <a href="http://ko-fi.com/covidpass" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.noProfit')">
                <img src="~assets/icons/non-commercial.svg" alt="Non commercial icon" />
              </Icon>
            </a>

            <a href="https://github.com/philipptrenz/covidpass/" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.openSource')">
                <img src="~assets/icons/open-source.svg" alt="Open Source icon" />
              </Icon>
            </a>

          </div>
        </div>

        <div class="flex flex-row ">
          <span class="flex flex-row justify-center" :class="!consentGiven && hintNotConsented ? 'text-error': ''">
            
            <Checkbox v-model="consentGiven" :error="!consentGiven && hintNotConsented" />
            <span class="ml-2 md" v-html="this.$t('index.consent.inputText')"></span>

          </span>
        </div>

        <Button :text="$t('index.consent.buttonText')" @click="onboarded()" class="mt-8" >
          <QRCodeIcon />
        </Button>

      </form>
    </div>

    <div v-show="state == 2">
      <div class="bg-primary bg-opacity-20 text-primary text-xl rounded-lg focus:outline-none text-center font-medium">
        <client-only>
          <qrcode-stream 
            v-if="!qrScannerDestroyed"
            @decode="onDecode" 
            @init="onInit" 
            :camera="state == 2 ? 'auto' : 'off'"
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

    <div v-show="state == 3 || state == 4" class="space-y-6">

      <Button v-if="state == 3" :text="$t('index.addToWallet.successMessage')" :disabled="true">
        <TickIcon />
      </Button>

      <div class="flex flex-col bg-primary text-white text-xl rounded-lg p-4 focus:outline-none ">
        
        <h2 class="">
          <span class="pl-2 inline-block align-middle font-semibold">
            <LogoWhite class="inline-block" />
            {{ 'COVID Pass' }}
          </span>
        </h2>

        <div class="flex flex-row align-middle justify-center py-14">
          <a ref="download" @click="downloaded" target="_system">
            <img :src="walletBadgeIcon" width="220" height="68" alt="Add to Apple Wallet" />
          </a>
        </div>

        <SettingsHint />

      </div>

      <Button v-show="state == 4 && isShareSheetAvailable" :text="$t('index.addToWallet.shareButtonText')" @click="tellYourFriends()" >
        <ShareIcon />
      </Button>

      <LinkButton v-show="state == 4" :text="$t('about.supportButton')" href="https://ko-fi.com/covidpass" >
        <KofiIcon />
      </LinkButton>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Logo from '~/assets/icons/logo.svg?inline';
import ChevronLeft from '~/assets/icons/chevron-left-32x32.svg?inline';
import ChevronDown from '~/assets/icons/chevron-down-48x48.svg?inline';

import QRCodeIcon from '~/assets/icons/qrcode.svg?inline';
import TickIcon from '~/assets/icons/tick.svg?inline';
import LogoWhite from '~/assets/icons/logo-white.svg?inline';
import KofiIcon from '~/assets/icons/kofi.svg?inline';
import ShareIcon from '~/assets/icons/share.svg?inline';


enum State {
  NONE = 0,
  ONBOARDED = 1,
  CONSENTED = 2,
  SCANNED = 3,
  DOWNLOADED = 4,
}

export default Vue.extend({
  layout: 'main',
  components: {
    Logo,
    ChevronLeft,
    ChevronDown,
    QRCodeIcon,
    TickIcon,
    LogoWhite,
    KofiIcon,
    ShareIcon,
  },
  data() {
    return {
      state: State.NONE,
      consentGiven: false,
      hintNotConsented: false,
      qrScannerLoading: false,
      qrScannerDestroyed: false,
      qrScannerError: <string|null>null,
      scanHint: this.$t('index.scan.hint'),
      initial: true
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    
    const description = this.$t('seo.description');
    const applicationName = this.$t('seo.applicationName');
    const basePath = this.$config.baseUrl.endsWith('/') ? this.$config.baseUrl.slice(0,-1) : this.$config.baseUrl;
    const localizedBasePath = basePath+this.localePath('/');
    
    const meta: any = [
      { hid: 'application-name', name: 'application-name', content: applicationName },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'og:url', property: 'og:url', content: localizedBasePath },
      ...i18nHead.meta
    ];
    
    return {
      title: this.$t('index.title') + ' – ' + this.$t('index.subtitle'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: meta,
      link: [
        ...i18nHead.link
      ]
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
    },
    isShareSheetAvailable() {
      return navigator && navigator.share;
    } 
  },
  methods: {
    toStep(step: State) {
      if (this.state > step) {
        this.state = step;
        this.scrollToTop();
      }
        
    },
    onboarded() {
      this.state = State.ONBOARDED;
      this.scrollToTop();
    },
    consented() {
      if (this.consentGiven) {
        this.state = State.CONSENTED;
        this.scrollToTop();
      } else 
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
      }
    },
    async onInit (promise: Promise<any>) {
      this.qrScannerLoading = true;
      this.qrScannerError = null;
      try {
        await promise
      } catch (error: any) {
        const errorString = <string>this.$t( 'index.scan.errors.' + error.name )
        if (errorString) {
          this.qrScannerError = errorString
        } else { 
          this.qrScannerError = error.name
        }
        console.warn("qr code reader error:", error)
      } finally {
        this.qrScannerLoading = false;
        if (this.initial) {
          this.initial = false;
        } else {
          this.scrollToTop();
        }
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
        } else {
          const passBlob = new Blob([pass], {type: "application/vnd.apple.pkpass"});
          const url = window.URL.createObjectURL(passBlob);
          const link = <HTMLLinkElement>this.$refs.download;
          link.href = url;
          link.setAttribute('download', `covidpass-${ this.randomId(8) }.pkpass`);

          this.state = State.SCANNED;
          this.scrollToTop();
        }
      } catch (e: any) {
        console.error('Error:', e.message)
      }
    },
    downloaded() {
      this.state = State.DOWNLOADED
      this.scrollToTop();
      this.$nuxt.$emit('downloaded', true);
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
    },
    scrollToTop() {
      document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
    },
  }
})
</script>
