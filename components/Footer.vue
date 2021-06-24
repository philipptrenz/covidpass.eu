<template>
  <div class="w-full flex flex-row justify-center text-xs font-light">
    <div class="w-full max-w-md flex flex-row justify-between px-8">
      <NuxtLink :to="localePath('/about')" class="">{{ $t('about.title') }}</NuxtLink> | 
      <NuxtLink :to="localePath('/impress')" class="">{{ $t('impress.title') }}</NuxtLink> | 
      <NuxtLink :to="localePath('/privacy')" class="">{{ $t('privacy.title') }}</NuxtLink> |
      <a class="" href="https://github.com/philipptrenz/eudgc2pkpass">Github</a>
    </div>
  </div>
</template>