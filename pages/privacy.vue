<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl">

    <h1 class="text-2xl font-bold text-primary flex flex-row align-middle justify-start">
      <NuxtLink :to="localePath('/')" class="inline-block pr-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 24L12 16L20 8" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
      
      {{ $t('privacy.title') }}
    </h1>
    
    <div v-html="$md.render(this.$t('privacy.md'))" class="md"></div>

  </div>
</template>