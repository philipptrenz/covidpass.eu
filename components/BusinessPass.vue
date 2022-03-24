<template>
  <div class="flex flex-col space-y-2 bg-businesspass text-white text-xl rounded-lg focus:outline-none ">
    <div class="pt-4 px-4">
      <span class="font-semibold text-base">From the creators of COVID Pass:</span>
      <img src="~assets/logos/businesspass.svg" alt="Business Pass" class="py-2" />
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 pl-4 pb-4 pr-4 md:pr-0">

        <p class="font-semibold text-base">
          The business card<br class="hidden md:inline" />
          you can’t forget
        </p>
        <p class="font-semibold text-base">
          and sticks to your<br class="hidden md:inline" />
          new contacts
        </p>
        <a 
          href="https://passit.one/" 
          target="_blank" 
          class="mt-2 cursor-pointer w-full h-16 bg-businesspass-button hover:bg-businesspass-button-hover active:bg-businesspass-button-active text-white text-xl lg:text-2xl font-medium rounded-lg px-3 flex flex-row justify-center align-middle space-x-2 transition duration-150 ">
          <span class="self-center">Create yours</span>
        </a>

      </div>
      <div class="md:w-1/2 bg-center">
        <img 
          class="w-full h-full object-contain object-right-bottom" 
          src="~assets/img/businesspass.png" 
          alt="Business Pass" />
      </div>
    </div>
  </div>
</template>