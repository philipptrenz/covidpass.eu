<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl">

    <div class="text-2xl font-bold text-primary flex flex-row align-middle justify-start pb-6">

      <NuxtLink :to="localePath('/')" class="inline-block pr-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 24L12 16L20 8" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>

      <h1>{{ $t('faq.title') }}</h1>
    </div>
    
    <div v-for="f in faqs" :key="f.q" class="pb-4">
      <h2 class="font-bold pb-2"> {{ f.q }} </h2>
      <p v-html="$md.render(f.a)"></p>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
const axios = require('axios');
const _ = require('lodash');

export default Vue.extend({
  layout: 'main',
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('faq.title') + ' – COVID Pass',
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
  },
   async asyncData(context) {

    const url = context.app.i18n.locale == 'de' ? context.$config.faqDataUrlDE : context.$config.faqDataUrlEN;
    const response = await axios.get(url)
    
    const rows = response.data.split(/\r\n|\n/);
    var faqs: any = [];
    for (var i=1; i < rows.length; i++) {
      var d = rows[i].split(/"\s{0,1},\s{0,1}"/);
      if (d.length == 1) { if (faqs.length-1 > -1 ) faqs[faqs.length-1]['a'] += d; 
      } else {
        faqs.push({ q: d[0].replace(/^\"/, ''), a: d[1].replace(/\"$/, '') });
      }
    }
    return { faqs }
  }
})
</script>