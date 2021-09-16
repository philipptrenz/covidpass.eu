<template>
  <div class="min-h-screen bg-primary font-light" :class="{'direction-rtl': $i18n.locale == 'ar'}">

    <NotCompatibleBrowserAlert />

    <div class="sm:hidden" style="height: 75vh;">
      <div class="w-full pt-6 bg-primary" >
        <img class="min-w-full" src="/mockup-wallet-mobile.png">
      </div>
    </div>

    <div class="h-full sm:min-h-screen flex flex-row px-4 sm:px-0 space-x-6">
      <div class="py-8 pl-4 flex-1 flex flex-col justify-center pr-2">
        <div>
          <Nuxt />
          <Footer class="pt-2 text-white" />
        </div>
      </div>
      
      <div
        class="flex-1 justify-self-end hidden sm:flex lg:hidden flex-row justify-center align-middle pl-2 bg-contain bg-no-repeat bg-right-bottom mt-28"
        style="background-image: url('/mockup-wallet-mobile.png');">
      </div>

      <div 
        class="flex-1 justify-self-end hidden lg:flex flex-row justify-center align-middle pl-2 bg-contain bg-no-repeat bg-bottom mt-28"
        style="background-image: url('/mockup-wallet-desktop.png');">
      </div>
      
    </div>
    
  </div>
</template>