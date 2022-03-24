<template>
  <div class="flex flex-col space-y-2 bg-businesspass text-white text-xl rounded-lg focus:outline-none ">
    <div class="pt-4 px-4">
      <span class="font-semibold text-base">From the creators of COVID Pass:</span>
      <img src="~assets/logos/businesspass.svg" alt="Business Pass" class="py-2" />
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 pl-4 pb-4 pr-4">

        <p class="font-semibold text-base">
          <span class="opacity-50">The business card<br />
          you</span> can’t forget
        </p>
        <p class="font-semibold text-base">
          <span class="opacity-50">and</span> sticks <span class="opacity-50"> to your<br />
          new contacts</span>
        </p>
        <a 
          href="https://passit.one/" 
          target="_blank" 
          class="mt-2 cursor-pointer w-full h-16 bg-businesspass-button hover:bg-businesspass-button-hover active:bg-businesspass-button-active text-white text-xl md:text-2xl font-medium rounded-lg px-3 flex flex-row justify-center align-middle space-x-2 transition duration-150 ">
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