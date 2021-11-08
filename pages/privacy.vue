<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl">

    <div class="text-2xl font-bold text-primary flex flex-row align-middle justify-start">
      <NuxtLink :to="localePath('/')" class="inline-block pr-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 24L12 16L20 8" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
      
      <h1>{{ $t('privacy.title') }}</h1>
    </div>
    
    <div v-html="$md.render(this.$t('privacy.md'))" class="md"></div>

  </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    const description = this.$t('seo.description');
    const applicationName = this.$t('seo.applicationName');
    const meta: any = [
      { hid: 'application-name', name: 'application-name', content: applicationName },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      ...i18nHead.meta
    ];
    
    return {
      title: this.$t('privacy.title') + ' – COVID Pass',
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: meta,
      link: [
        ...i18nHead.link
      ]
    }
  },
})
</script>