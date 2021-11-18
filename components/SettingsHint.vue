<template>
  <div>
    <p class="font-light text-xs leading-5" v-html="$t('index.addToWallet.note')"></p>

    <div class="flex flex-row flex-wrap ">
      <img class="pr-2 mt-4" width="160" height="30" src="icons/ios-settings.svg" alt="Apple iPhone iOS Privacy Settings description">

      <div class="bg-white rounded-lg flex-grow flex flex-row justify-between align-middle px-3 mt-4" style="min-width: 180px; height: 30px;">
        <span class="inline-block text-black text-xs" style="padding: 7.5px 0;">Wallet</span>
        <IOSSwitchIcon />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IOSSwitchIcon from '~/assets/icons/ios-switch-icon.svg?inline';
export default Vue.extend({
  components: {
    IOSSwitchIcon,
  }
})
</script>