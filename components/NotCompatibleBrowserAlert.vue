<template>
  <transition name="fade">
    <div v-if="doShow" class="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-25 z-50 flex transition duration-500 ease-in-out">
      <div class="ml-4 mr-2 p-6 sm:px-0 py-6 px-4 w-full self-end">
        <div class="mx-auto self-end flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl ">

          <div v-if="isIPhoneAndNotSafari" class="space-y-2">

            <div class="flex flex-row justify-between align-middle">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="19" stroke="#27215B" stroke-width="2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3686 14.0181C35.975 13.1086 34.8914 12.025 33.9819 12.6314L21.5044 20.9497C21.2847 21.0962 21.0962 21.2847 20.9497 21.5044L12.6314 33.9819C12.025 34.8914 13.1086 35.975 14.0181 35.3686L26.4956 27.0503C26.7153 26.9038 26.9038 26.7153 27.0503 26.4956L35.3686 14.0181ZM24 26C25.1046 26 26 25.1046 26 24C26 22.8955 25.1046 22 24 22C22.8954 22 22 22.8955 22 24C22 25.1046 22.8954 26 24 26Z" fill="#27215B"/>
              </svg>

              <button class="bg-primary bg-opacity-20 w-12 h-12 rounded-lg focus:outline-none" @click="doShow = false">
                <svg class="block m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20711 3.79289C4.81658 3.40237 4.18342 3.40237 3.79289 3.79289C3.40237 4.18342 3.40237 4.81658 3.79289 5.20711L10.5858 12L3.79289 18.7929C3.40237 19.1834 3.40237 19.8166 3.79289 20.2071C4.18342 20.5976 4.81658 20.5976 5.20711 20.2071L12 13.4142L18.7929 20.2071C19.1834 20.5976 19.8166 20.5976 20.2071 20.2071C20.5976 19.8166 20.5976 19.1834 20.2071 18.7929L13.4142 12L20.2071 5.20711C20.5976 4.81658 20.5976 4.18342 20.2071 3.79289C19.8166 3.40237 19.1834 3.40237 18.7929 3.79289L12 10.5858L5.20711 3.79289Z" fill="#27215B"/>
                </svg>
              </button>
            </div>

            <p>{{ $t('browserAlert.notSafari') }}</p>

            <div class="pt-4"> 
              <button @click="copyToClipboard()" class="w-full focus:outline-none">
                <div class="flex justify-center w-full bg-primary bg-opacity-20 text-primary text-xl font-medium rounded-lg py-2 px-3 focus:outline-none" >
                  <span class="mx-auto" > 
                    <svg class="inline-block pr-1" width="48" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.935 9.56491C35.5919 7.22176 31.7929 7.22176 29.4497 9.56491L20.9645 18.0502C18.6213 20.3933 18.6213 24.1923 20.9645 26.5355C21.355 26.926 21.9882 26.926 22.3787 26.5355C22.7692 26.1449 22.7692 25.5118 22.3787 25.1213C20.8166 23.5592 20.8166 21.0265 22.3787 19.4644L30.864 10.9791C32.4261 9.41702 34.9587 9.41702 36.5208 10.9791C38.0829 12.5412 38.0829 15.0739 36.5208 16.636L32.9853 20.1715C32.5948 20.562 32.5948 21.1952 32.9853 21.5857C33.3758 21.9762 34.009 21.9762 34.3995 21.5857L37.935 18.0502C40.2782 15.707 40.2782 11.9081 37.935 9.56491ZM11.065 36.435C13.4081 38.7781 17.2071 38.7781 19.5503 36.435L28.0355 27.9497C30.3787 25.6065 30.3787 21.8076 28.0355 19.4644C27.645 19.0739 27.0118 19.0739 26.6213 19.4644C26.2308 19.8549 26.2308 20.4881 26.6213 20.8786C28.1834 22.4407 28.1834 24.9734 26.6213 26.5355L18.136 35.0208C16.5739 36.5829 14.0413 36.5829 12.4792 35.0208C10.9171 33.4587 10.9171 30.926 12.4792 29.3639L16.0147 25.8284C16.4052 25.4378 16.4052 24.8047 16.0147 24.4142C15.6242 24.0236 14.991 24.0236 14.6005 24.4142L11.065 27.9497C8.72183 30.2928 8.72183 34.0918 11.065 36.435Z" fill="#27215B"/>
                    </svg>

                    {{ $t('browserAlert.copyLink') }}
                  </span>
                </div>
              </button>
            </div>

          </div>

          <div v-else-if="isAndroid" class="space-y-2">

            <div class="flex flex-row justify-between align-middle">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 2H30C30 2.55228 29.5523 3 29 3H19C18.4477 3 18 2.55228 18 2H16C14.8954 2 14 2.89543 14 4V44C14 45.1046 14.8954 46 16 46H32C33.1046 46 34 45.1046 34 44V4C34 2.89543 33.1046 2 32 2ZM16 0C13.7909 0 12 1.79086 12 4V44C12 46.2091 13.7909 48 16 48H32C34.2091 48 36 46.2091 36 44V4C36 1.79086 34.2091 0 32 0H16ZM19 43.5C18.7239 43.5 18.5 43.7239 18.5 44C18.5 44.2761 18.7239 44.5 19 44.5H29C29.2761 44.5 29.5 44.2761 29.5 44C29.5 43.7239 29.2761 43.5 29 43.5H19Z" fill="#27215B"/>
              </svg>

              <button class="bg-primary bg-opacity-20 w-12 h-12 rounded-lg focus:outline-none" @click="doShow = false">
                <svg class="block m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20711 3.79289C4.81658 3.40237 4.18342 3.40237 3.79289 3.79289C3.40237 4.18342 3.40237 4.81658 3.79289 5.20711L10.5858 12L3.79289 18.7929C3.40237 19.1834 3.40237 19.8166 3.79289 20.2071C4.18342 20.5976 4.81658 20.5976 5.20711 20.2071L12 13.4142L18.7929 20.2071C19.1834 20.5976 19.8166 20.5976 20.2071 20.2071C20.5976 19.8166 20.5976 19.1834 20.2071 18.7929L13.4142 12L20.2071 5.20711C20.5976 4.81658 20.5976 4.18342 20.2071 3.79289C19.8166 3.40237 19.1834 3.40237 18.7929 3.79289L12 10.5858L5.20711 3.79289Z" fill="#27215B"/>
                </svg>
              </button>
            </div>

            <p>{{ $t('browserAlert.android') }}</p>

          </div>

          <div v-else class="space-y-2">

            <div class="flex flex-row justify-between align-middle">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 2H30C30 2.55228 29.5523 3 29 3H19C18.4477 3 18 2.55228 18 2H16C14.8954 2 14 2.89543 14 4V44C14 45.1046 14.8954 46 16 46H32C33.1046 46 34 45.1046 34 44V4C34 2.89543 33.1046 2 32 2ZM16 0C13.7909 0 12 1.79086 12 4V44C12 46.2091 13.7909 48 16 48H32C34.2091 48 36 46.2091 36 44V4C36 1.79086 34.2091 0 32 0H16ZM19 43.5C18.7239 43.5 18.5 43.7239 18.5 44C18.5 44.2761 18.7239 44.5 19 44.5H29C29.2761 44.5 29.5 44.2761 29.5 44C29.5 43.7239 29.2761 43.5 29 43.5H19Z" fill="#27215B"/>
              </svg>


              <button class="bg-primary bg-opacity-20 w-12 h-12 rounded-lg focus:outline-none" @click="doShow = false">
                <svg class="block m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20711 3.79289C4.81658 3.40237 4.18342 3.40237 3.79289 3.79289C3.40237 4.18342 3.40237 4.81658 3.79289 5.20711L10.5858 12L3.79289 18.7929C3.40237 19.1834 3.40237 19.8166 3.79289 20.2071C4.18342 20.5976 4.81658 20.5976 5.20711 20.2071L12 13.4142L18.7929 20.2071C19.1834 20.5976 19.8166 20.5976 20.2071 20.2071C20.5976 19.8166 20.5976 19.1834 20.2071 18.7929L13.4142 12L20.2071 5.20711C20.5976 4.81658 20.5976 4.18342 20.2071 3.79289C19.8166 3.40237 19.1834 3.40237 18.7929 3.79289L12 10.5858L5.20711 3.79289Z" fill="#27215B"/>
                </svg>
              </button>
            </div>
            
            <p>{{ $t('browserAlert.notIphone') }}</p>
            
            <div v-if="canShare" class="pt-4"> 
              <button @click="share()" class="w-full focus:outline-none">
                <div class="flex justify-center w-full bg-primary bg-opacity-20 text-primary text-xl font-medium rounded-lg py-2 px-3 focus:outline-none" >
                  <span class="mx-auto" > 
                    <svg class="inline-block pr-1" width="48" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2071 3.29289C24.8166 2.90237 24.1834 2.90237 23.7929 3.29289L17.4289 9.65685C17.0384 10.0474 17.0384 10.6805 17.4289 11.0711C17.8195 11.4616 18.4526 11.4616 18.8431 11.0711L23.5 6.41421V22C23.5 22.5523 23.9477 23 24.5 23C25.0523 23 25.5 22.5523 25.5 22V6.41421L30.1569 11.0711C30.5474 11.4616 31.1805 11.4616 31.5711 11.0711C31.9616 10.6805 31.9616 10.0474 31.5711 9.65685L25.2071 3.29289ZM14.5 19C14.5 17.3431 15.8431 16 17.5 16H20.1C20.6523 16 21.1 15.5523 21.1 15C21.1 14.4477 20.6523 14 20.1 14H17.5C14.7386 14 12.5 16.2386 12.5 19V33C12.5 35.7614 14.7386 38 17.5 38H31.5C34.2614 38 36.5 35.7614 36.5 33V19C36.5 16.2386 34.2614 14 31.5 14H28.9C28.3477 14 27.9 14.4477 27.9 15C27.9 15.5523 28.3477 16 28.9 16H31.5C33.1569 16 34.5 17.3431 34.5 19V33C34.5 34.6569 33.1569 36 31.5 36H17.5C15.8431 36 14.5 34.6569 14.5 33V19Z" fill="#27215B"/>
                    </svg>

                    {{ $t('browserAlert.shareLink') }}
                  </span>
                </div>
              </button>
            </div>


          </div>



        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isIPhoneAndNotSafari: false,
      isAndroid: false,
      isNotIPhone: false,
      doShow: false,
      accessToClipboardGranted: false,
      canShare: false
    }
  },
  mounted() {

    console.log(navigator.permissions)
    if (navigator.permissions && typeof navigator.permissions.query === 'function') {
      navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
          this.accessToClipboardGranted = true;
        } else {
          console.warn("no access for writing to clipboard!")
        }
      });
    } else {
      this.accessToClipboardGranted = true;
    }

    this.canShare = typeof navigator.share === 'function';

    this.isIPhoneAndNotSafari = this.$ua.isFromIphone() && this.$ua.browser() != 'Safari';
    this.isAndroid = this.$ua.isFromAndroidMobile() || this.$ua.isFromAndroidTablet();
    this.isNotIPhone = !this.$ua.isFromIphone();
    this.doShow = this.isIPhoneAndNotSafari || this.isNotIPhone || this.isAndroid;
    
    console.log("is iPhone and not Safari:", this.isIPhoneAndNotSafari);
    console.log("is Android:", this.isAndroid);
    console.log("is not iPhone:", this.isNotIPhone);
    
  },
  methods: {
    copyToClipboard() {
      navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
          navigator.clipboard.writeText(this.currentUrl).then(function() {
            console.log("URL successfully saved to clipboard")
          }, function() {
            console.log("saving URL to clipboard failed")
            // TODO: Prompt user
          });
        } else {
          console.error("no access for writing to clipboard!")
        }
      });
    },
    async share() {
      try {
        await navigator.share(this.shareData)
        console.log("successfully shared")
      } catch(err) {
        console.error('Sharing failed: ' + err)
      }

    }
  },
  computed: {
    currentUrl() {
      return window.location.protocol + "//" + window.location.host;
    },
    shareData() {
      return {
        title: document.title,
        text: this.$t('index.title') + ' – ' + this.$t('index.subtitle'),
        url: window.location.protocol + "//" + window.location.host,
      }
    }
  }
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>