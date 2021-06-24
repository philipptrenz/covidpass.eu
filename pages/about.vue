<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl">

    <h1 class="text-2xl font-bold">{{ $t('about.title') }}</h1>
    
    <p v-for=" p in $t('about.paragraphs')" v-bind:key="p" v-html="p" />
    
    <NuxtLink :to="localePath('/')" class="underline text-sm">{{ $t('labels.backToHome') }}</NuxtLink>

  </div>
</template>