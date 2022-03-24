<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl">

    <div class="text-2xl font-bold text-primary flex flex-row align-middle justify-start">

      <NuxtLink :to="localePath('/')" class="inline-block pr-2">
        <ChevronLeft class="w-8 h-8" />
      </NuxtLink>

      <h1>{{ $t('about.title') }}</h1>
    </div>
    
    <div v-html="$md.render(this.$t('about.md'))" class="md"></div>

    <LinkButton :text="$t('about.supportButton')" href="https://ko-fi.com/covidpass" >
      <KofiIcon />
    </LinkButton>
    
    <BusinessPass />
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ChevronLeft from '~/assets/icons/chevron-left-32x32.svg?inline';
import KofiIcon from '~/assets/icons/kofi.svg?inline';
import TranslateIcon from '~/assets/icons/translate.svg?inline';
import BusinessPass from '../components/BusinessPass.vue';

export default Vue.extend({
  components: {
    ChevronLeft,
    KofiIcon,
    TranslateIcon,
    BusinessPass
},
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    const description = this.$t('seo.description');
    const applicationName = this.$t('seo.applicationName');
    const basePath = this.$config.baseUrl.endsWith('/') ? this.$config.baseUrl.slice(0,-1) : this.$config.baseUrl;
    const localizedBasePath = basePath+this.localePath('/');

    const meta: any = [
      
      { hid: 'application-name', property: 'application-name', content: applicationName },
      { hid: 'og:title', property: 'og:title', content: applicationName },
      { hid: 'twitter:title', property: 'twitter:title', content: applicationName },

      { hid: 'description', property: 'description', content: description },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'twitter:description', property: 'twitter:description', content: description },

      { hid: 'og:url', property: 'og:url', content: localizedBasePath },
      { hid: 'twitter:url', property: 'twitter:url', content: localizedBasePath },

      ...i18nHead.meta
    ];

    return {
      title: this.$t('about.title') + ' – COVID Pass',
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