<template>
  <div class="w-full flex flex-row justify-center text-xs font-light">
    <div class="w-full max-w-md px-6">

      <div class="flex flex-row justify-center align-middle space-x-1 md:space-x-2 lg:space-x-3"> 
        <NuxtLink :to="localePath('/about')">{{ $t('about.title') }}</NuxtLink> 
        <span>|</span> 
        <NuxtLink :to="localePath('/impress')">{{ $t('impress.title') }}</NuxtLink>
        <span>|</span> 
        <NuxtLink :to="localePath('/privacy')">{{ $t('privacy.title') }}</NuxtLink>  
        <span>|</span> 
        <select id="select" ref="select" v-model="$i18n.locale" @change="onChange($event)" class="uppercase appearance-none bg-transparent border-none rounded-none pr-4 focus:outline-none mx-3">
          <option
            class="appearance-none bg-none"
            v-for="lang in $i18n.locales"
            :key="lang.code"
            :value="lang.code"
            >{{ lang.code }}</option
          >
        </select>
      </div>

      <div class="flex flex-row justify-center align-middle pt-1 space-x-1 md:space-x-2 lg:space-x-3">
        <a href="https://applewallet.notion.site/applewallet/COVID-Pass-FAQ-88ea2d36936740bf8b454894bb91ac43" target="_blank">FAQ</a>
        <span>|</span> 
        <a href="https://github.com/philipptrenz/covidpass" target="_blank">Github</a>
        <span>|</span> 
        <a href="https://github.com/philipptrenz/covidpass/issues/new" target="_blank">{{ $t('labels.reportIssue') }}</a> 
        <span>|</span>   
        <a href="https://ko-fi.com/covidpass" target="_blank">{{ $t('labels.support') }}</a>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      selectedLang: null as any
    }
  },
  methods: {
    onChange(event: any) {
      this.$i18n.setLocale(event.target.value)
    },
  },
})
</script>


<style scoped>
#select {
  background-image: url("data:image/svg+xml; utf8, <svg class='inline-block' width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.30005 6L8.30005 10L12.3 6' stroke='white' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-size: right;
  background-position-x: 20px;
}
</style>