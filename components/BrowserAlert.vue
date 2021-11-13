<template>
  <transition name="fade">
    <div v-if="doShow" class="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-25 z-50 flex transition duration-500 ease-in-out" @click.self="hideAlert()">
      <div class="ml-4 mr-2 p-6 sm:px-0 py-6 px-4 w-full self-end">
        <div class="mx-auto self-end flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl ">
          <div class="space-y-2">

            <div class="flex flex-row justify-between align-middle">
              <IphoneIcon />
              <CloseButton @click="doShow = false" />
            </div>

            <p v-if="isIPhoneAndNotSafari">{{ $t('browserAlert.notSafari') }}</p>
            <p v-else-if="isAndroid">{{ $t('browserAlert.android') }}</p>
            <p v-else>{{ $t('browserAlert.notIphone') }}</p>

            <div v-if="isIPhoneAndNotSafari" class="pt-4"> 
              <Button v-if="accessToClipboardGranted" :text="$t('browserAlert.copyLink')" @click="copyToClipboard()"> 
                <LinkIcon />
              </Button>
            </div>
            <div v-else-if="isAndroid" class="pt-4"></div>
            <div v-else class="pt-4"> 
              <Button v-if="canShare" :text="$t('browserAlert.shareLink')" @click="share()">
                <ShareIcon />
              </Button>
            </div>

          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import IphoneIcon from '~/assets/icons/iphone.svg?inline';
import ShareIcon from '~/assets/icons/share.svg?inline';
import LinkIcon from '~/assets/icons/link.svg?inline';

export default Vue.extend({
  components: {
    IphoneIcon,
    ShareIcon,
    LinkIcon,
  },
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
  created() {
    /*this.$nuxt.$on('downloaded', ($event: Event) => {
      this.setDoShow();
    })*/
  },
  mounted() {
    if ( navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
          this.accessToClipboardGranted = true;
        } else {
          console.warn("no access for writing to clipboard!")
        }
      });
    }

    this.canShare = typeof navigator.share === 'function';

    this.isIPhoneAndNotSafari = this.$ua.isFromIphone() && this.$ua.browser() != 'Safari';
    this.isAndroid = this.$ua.isFromAndroidMobile() || this.$ua.isFromAndroidTablet();
    this.isNotIPhone = !this.$ua.isFromIphone();
    this.setDoShow();
    
    /*
    console.log("is iPhone and not Safari:", this.isIPhoneAndNotSafari);
    console.log("is Android:", this.isAndroid);
    console.log("is not iPhone:", this.isNotIPhone);
    */
  },
  methods: {
    setDoShow() {
      this.doShow = this.isIPhoneAndNotSafari || this.isNotIPhone || this.isAndroid;
    },
    copyToClipboard() {
      navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
          navigator.clipboard.writeText(this.currentUrl).then(function() {
            console.log("URL successfully saved to clipboard");
          }, function() {
            console.log("saving URL to clipboard failed");
          });
        } else {
          console.error("no access for writing to clipboard!")
        }
      });
    },
    async share() {
      try {
        await navigator.share(this.shareData);
        console.log("successfully shared");
      } catch(err) {
        console.error('Sharing failed: ' + err);
      }

    },
    hideAlert() {
      this.doShow = false;
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