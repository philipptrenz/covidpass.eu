<template>
  <div class="m-auto flex flex-col space-y-4 max-w-sm ">

    <h1 class="text-2xl font-bold">{{ $t('privacy.title') }}</h1>
    
    <p v-for=" p in $t('privacy.paragraphs')" v-bind:key="p" v-html="p" />
    
    <NuxtLink :to="localePath('/')" class="underline text-sm">{{ $t('labels.backToHome') }}</NuxtLink>

  </div>
</template>