<template>
  <div class="min-h-screen bg-primary font-light align-middle justify-center">

    <div class="pt-8 pb-8 h-full sm:min-h-screen flex flex-row px-4 md:px-6 space-x-6">
      <div class="flex-1 flex flex-col justify-center pr-2">
        <div>
          <Nuxt />
          <Footer class="pt-2 text-white" />
        </div>
      </div>
      
      <div class="flex-1 hidden sm:flex flex-row justify-center align-middle pl-2">
        <div class="h-full fixed float-right">
          <img class="h-full md:pt-8 lg:pt-16 object-cover object-left-bottom" src="/mockup-wallet-desktop.png">
        </div>
      </div>
      
    </div>
    
  </div>
</template>