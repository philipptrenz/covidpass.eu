<template>
  <div class="w-full flex flex-row justify-center text-xs font-light">
    <div class="w-full max-w-md flex flex-row justify-between px-4 sm:px-8">
      <NuxtLink :to="localePath('/about')" class="">{{ $t('about.title') }}</NuxtLink> | 
      <NuxtLink :to="localePath('/impress')" class="">{{ $t('impress.title') }}</NuxtLink> | 
      <NuxtLink :to="localePath('/privacy')" class="">{{ $t('privacy.title') }}</NuxtLink> |
      <a class="" href="https://github.com/philipptrenz/apple-wallet-eu-covid-pass" target="_blank">Github</a> |
      <select v-model="$i18n.locale" class="hidden">
        <option
          v-for="lang in $i18n.locales"
          :key="lang"
          :value="lang"
          >{{ lang }}</option
        >
      </select>

      
      <button class="uppercase">
        {{ $i18n.locale }}
        <svg class="inline-block" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.30005 6L8.30005 10L12.3 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </button>
    </div>
  </div>
</template>