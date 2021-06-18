<template>
  <div class="w-full flex flex-row justify-end text-sm">
    <span v-for="(lang, index) in $i18n.locales" v-bind:key="lang">

      <nuxt-link 
        :to="switchLocalePath(lang)"
        class="uppercase px-1 focus:outline-none" 
        :class="$i18n.locale == lang ? 'font-bold tracking-normal' : ''"
        >
        {{ lang }}
      </nuxt-link>
      
      <span v-if="index < $i18n.locales.length-1">|</span>

    </span>
  </div>
</template>