<template>
  <div class="min-h-screen bg-primary font-light">

    <!--<LanguagePicker class="text-white" />-->

    <div class="h-screen sm:hidden">
      <div class="text-2xl font-light text-white p-6">
        <h1 class="font-medium">{{ $t('index.title') }}</h1>
        <h2 class="">{{ $t('index.subtitle') }}</h2>
      </div>
      <div class="w-full bg-primary">
        <img class="min-w-full" src="/mockup-wallet-mobile.png">
      </div>
    </div>

    <div class="pt-8 pb-8 h-full sm:min-h-screen flex flex-row px-4 md:px-6 space-x-6">
      <div class="flex-1 flex flex-col justify-center">
        <div>
          <Nuxt />
          <Footer class="pt-2 text-white" />
        </div>
      </div>
      <!--
      <div class="flex-1 hidden sm:flex flex-col justify-center">
        <div class="h-full fixed float-right">
          <img class="h-full pt-16 object-cover object-left-bottom float-right" src="/mockup-wallet-desktop.png">
        </div>
      </div>
      -->
    </div>
    
  </div>
</template>