<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl">

    <h1 class="text-2xl font-bold">{{ $t('privacy.title') }}</h1>
    
    <div v-html="$md.render(this.$t('privacy.md'))" class="md"></div>
    
    <NuxtLink :to="localePath('/')" class="underline text-sm">{{ $t('labels.backToHome') }}</NuxtLink>

  </div>
</template>