<template>
  <div class="w-full flex flex-row justify-center text-sm">
    <div>
      <NuxtLink :to="localePath('/about')" class="underline">{{ $t('about.title') }}</NuxtLink> | 
      <NuxtLink :to="localePath('/impress')" class="underline">{{ $t('impress.title') }}</NuxtLink> | 
      <NuxtLink :to="localePath('/privacy')" class="underline">{{ $t('privacy.title') }}</NuxtLink> |
      <a class="underline" href="https://github.com/philipptrenz/eudgc2pkpass">Github</a>
    </div>
  </div>
</template>