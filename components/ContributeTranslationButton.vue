<template>
  <a href="mailto:info@covidpass.eu?subject=I%20would%20like%20to%20translate!" target="_blank">
    <div class="flex justify-center w-full bg-primary bg-opacity-20 text-primary text-xl font-medium rounded-lg py-5 px-3 focus:outline-none" >
      <span class="mx-auto flex flex-row space-x-4" >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 18C18 16.8954 18.8954 16 20 16H40C41.1046 16 42 16.8954 42 18V40.263C42 41.8604 40.2197 42.8131 38.8906 41.9271L30.5038 36.3359C30.1753 36.1169 29.7893 36 29.3944 36H20C18.8954 36 18 35.1046 18 34V18Z" stroke="#27215B" stroke-width="2"/>
          <path d="M14 30.6667L10.6641 32.8906C8.67044 34.2197 6 32.7905 6 30.3944V11C6 9.34315 7.34315 8 9 8H27C28.6569 8 30 9.34315 30 11V12" stroke="#27215B" stroke-width="2" stroke-linecap="round"/>
        </svg>


        <span class="self-center">{{ $t('about.contributeTranslation') }}</span>
      </span>
    </div>
  </a>
</template>