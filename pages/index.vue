<template>
  <div class="m-auto flex flex-col space-y-6 max-w-lg bg-white p-6 rounded-2xl" id="content">

    <div v-if="state != 1" class="flex flex-row justify-start">
      <div class="w-10">
        <Logo class="pr-2 flex-shrink-0"/>
      </div>
      <div class="inline-block text-2xl text-primary">
        <h1> 
          <span class="font-medium">{{ $t('index.title') }}</span><br/>
          <span class="">{{ $t('index.subtitle') }}</span>
        </h1>
      </div>
    </div>

    <div v-else class="text-2xl text-primary flex flex-row align-middle justify-start">
      <div class="w-10">
        <button @click="state = 0" class="inline-block pr-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 24L12 16L20 8" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="inline-block text-2xl text-primary">
        <h1> 
          <span class="font-medium">{{ $t('index.title') }}</span><br/>
          <span class="">{{ $t('index.subtitle') }}</span>
        </h1>
      </div>
    </div>
    

    <div v-if="state == 0" class="-mt-2">        
      <div>
        
        <div class="flex flex-row justify-around break-normal space-x-4 pb-8">
          
          <Icon :text="$t('index.onboarding.icons.withoutApp')">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9494 13.2168C27.7226 13.6632 27.9875 14.6519 27.5411 15.4251L20.6162 27.4191L25.5046 27.4191C27.1211 27.4191 28.109 29.3949 27.5701 30.6522H12.6178C11.7425 30.6522 11.0262 29.9555 11.0019 29.0805L11.0006 29.0356C10.9765 28.1673 11.6609 27.4438 12.5292 27.4197L12.551 27.4192L16.883 27.4192L22.1416 18.3111L20.4753 15.4251C20.0289 14.6519 20.2938 13.6632 21.067 13.2168C21.8402 12.7705 22.8289 13.0354 23.2753 13.8085L24.0082 15.0781L24.7412 13.8085C25.1876 13.0354 26.1762 12.7705 26.9494 13.2168ZM26.4028 19.1568L26.4095 19.1697C26.5243 19.3788 28.1057 22.1322 31.1536 27.43C31.2154 27.4228 31.2784 27.4191 31.3422 27.4191H35.3835C36.2763 27.4191 37.0001 28.1428 37.0001 29.0356C37.0001 29.9284 36.2763 30.6522 35.3835 30.6522L33.0075 30.6519L34.639 33.4866C35.0787 34.2507 34.8247 35.2241 34.0729 35.6772L34.0443 35.6941C33.2801 36.1353 32.3054 35.8816 31.8519 35.1291L31.836 35.1022L29.7424 31.4712C27.5149 27.6031 26.1622 25.2345 25.6843 24.3656C24.6964 22.5695 25.4149 19.8752 26.4028 19.1568ZM16.1825 35.1068C16.8792 33.9058 17.7699 32.367 17.7521 32.3802C17.2423 31.3706 15.8952 31.1012 14.5481 31.4604L13.381 33.4837C12.9343 34.2582 13.1998 35.2481 13.9741 35.6951C14.7469 36.1413 15.7347 35.8787 16.1825 35.1068Z" fill="white"/>
              <rect x="6" y="6" width="36" height="36" rx="10" stroke="white" stroke-width="2"/>
              <rect x="4.58579" y="40" width="50" height="4" rx="2" transform="rotate(-45 4.58579 40)" fill="white" stroke="#27215B" stroke-width="2"/>
            </svg>
          </Icon>

          <Icon :text="$t('index.onboarding.icons.free')">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7313 10.269C24.0155 9.72882 21.2006 10.0061 18.6424 11.0657C16.0843 12.1253 13.8978 13.9197 12.3594 16.222C11.5777 17.3919 10.9813 18.6662 10.5836 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H10.1436C10.0484 22.6597 10 23.328 10 24C10 24.672 10.0484 25.3403 10.1436 26H19C19.5523 26 20 26.4477 20 27C20 27.5523 19.5523 28 19 28H10.5836C10.9813 29.3338 11.5777 30.6081 12.3594 31.778C13.8978 34.0803 16.0843 35.8747 18.6424 36.9343C21.2006 37.994 24.0155 38.2712 26.7313 37.731C29.447 37.1908 31.9416 35.8574 33.8995 33.8995C34.29 33.509 34.9232 33.509 35.3137 33.8995C35.7042 34.29 35.7042 34.9232 35.3137 35.3137C33.0761 37.5514 30.2251 39.0752 27.1214 39.6926C24.0177 40.3099 20.8007 39.9931 17.8771 38.7821C14.9534 37.5711 12.4546 35.5203 10.6965 32.8891C9.69211 31.386 8.95526 29.732 8.50806 28H5C4.44772 28 4 27.5523 4 27C4 26.4477 4.44772 26 5 26H8.12548C8.0422 25.339 8 24.6711 8 24C8 23.3289 8.0422 22.661 8.12548 22H5C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20H8.50807C8.95526 18.2681 9.69211 16.614 10.6965 15.1109C12.4546 12.4797 14.9534 10.4289 17.8771 9.21794C20.8007 8.00693 24.0177 7.69008 27.1214 8.30744C30.2251 8.92481 33.0761 10.4487 35.3137 12.6863C35.7042 13.0768 35.7042 13.71 35.3137 14.1005C34.9232 14.491 34.29 14.491 33.8995 14.1005C31.9416 12.1426 29.447 10.8092 26.7313 10.269Z" fill="white"/>
              <rect x="4.58579" y="40" width="50" height="4" rx="2" transform="rotate(-45 4.58579 40)" fill="white" stroke="#27215B" stroke-width="2"/>
            </svg>
          </Icon>

          <Icon :text="$t('index.onboarding.icons.appleWatch')">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="36" y="16" width="2" height="5" rx="0.5" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2056 3.7986C20.1336 3.66423 21.7316 3.5 24 3.5C26.2684 3.5 27.8664 3.66423 28.7944 3.7986C28.9276 3.81789 29.067 3.93406 29.0826 4.15155C29.0971 4.35376 29.1108 4.54815 29.124 4.7351C29.1957 5.7503 29.2519 6.5459 29.3328 7.18007C29.4305 7.94555 29.574 8.57102 29.8759 9.15892C29.9364 9.27679 30.0018 9.3902 30.072 9.50039C30.048 9.50013 30.024 9.5 30 9.5L18 9.5C17.976 9.5 17.952 9.50013 17.928 9.50039C17.9982 9.3902 18.0636 9.27679 18.1241 9.15892C18.426 8.57102 18.5695 7.94555 18.6672 7.18007C18.7481 6.54589 18.8043 5.75027 18.876 4.73505L18.876 4.73454C18.8892 4.54777 18.9029 4.35355 18.9174 4.15155C18.933 3.93406 19.0724 3.81789 19.2056 3.7986ZM13.5 16V18L13.5 30L13.5 32.0033C13.5018 34.4871 15.5158 36.5 18 36.5H30C32.4853 36.5 34.5 34.4853 34.5 32L34.5 30L34.5 18V16C34.5 13.5147 32.4853 11.5 30 11.5L18 11.5C15.5147 11.5 13.5 13.5147 13.5 16ZM36.5 18L36.5 30L36.5 32L36.5 32.1897C36.5 33.9657 35.7649 35.5719 34.585 36.7175C34.1008 37.1876 33.7086 37.5571 33.3734 37.873L33.3731 37.8733C33.0454 38.182 32.7721 38.4395 32.5205 38.6896C32.0433 39.1638 31.8071 39.4585 31.6551 39.7547C31.5059 40.0451 31.4016 40.4083 31.3167 41.0732C31.2435 41.6463 31.1922 42.3727 31.12 43.3931C31.1066 43.5822 31.0925 43.7814 31.0775 43.9915C31.0007 45.062 30.2257 46.015 29.081 46.1808C28.0591 46.3287 26.3653 46.5 24 46.5C21.6347 46.5 19.9409 46.3287 18.919 46.1808C17.7743 46.015 16.9993 45.062 16.9225 43.9915C16.9075 43.7823 16.8935 43.584 16.8802 43.3957L16.88 43.3932C16.8078 42.3727 16.7565 41.6463 16.6833 41.0732C16.5984 40.4083 16.4941 40.0451 16.3449 39.7546C16.1929 39.4585 15.9567 39.1638 15.4795 38.6895C15.2279 38.4395 14.9546 38.182 14.6269 37.8733C14.2916 37.5574 13.8993 37.1877 13.415 36.7175C12.2351 35.5719 11.5 33.9657 11.5 32.1897L11.5 32.004L11.5 32V18V16V15.8103C11.5 14.0343 12.2351 12.4281 13.415 11.2825C13.8993 10.8123 14.2916 10.4426 14.6269 10.1267L14.627 10.1267C14.9547 9.81792 15.2279 9.56046 15.4795 9.31045C15.9567 8.8362 16.1929 8.5415 16.3449 8.24535C16.4941 7.95489 16.5984 7.59165 16.6833 6.92684C16.7565 6.35369 16.8078 5.62735 16.88 4.60689L16.88 4.60687C16.8934 4.4178 16.9075 4.21863 16.9225 4.00847C16.9993 2.93798 17.7743 1.985 18.919 1.81924C19.9409 1.67127 21.6347 1.5 24 1.5C26.3653 1.5 28.0591 1.67127 29.081 1.81924C30.2257 1.985 31.0007 2.93798 31.0775 4.00847C31.0925 4.21797 31.1065 4.41655 31.1199 4.60509L31.12 4.60679V4.60681C31.1922 5.62731 31.2435 6.35367 31.3167 6.92684C31.4016 7.59165 31.5059 7.95489 31.6551 8.24535C31.8071 8.5415 32.0433 8.8362 32.5205 9.31045C32.7721 9.56047 33.0454 9.81795 33.3731 10.1267L33.3731 10.1267C33.7084 10.4426 34.1007 10.8123 34.585 11.2825C35.7649 12.4281 36.5 14.0343 36.5 15.8103V16V18ZM30 38.5C30.024 38.5 30.048 38.4999 30.072 38.4996C30.0018 38.6098 29.9364 38.7232 29.8759 38.8411C29.574 39.429 29.4305 40.0544 29.3328 40.8199C29.2519 41.4541 29.1957 42.2497 29.124 43.265L29.1238 43.268C29.1107 43.454 29.097 43.6474 29.0826 43.8485C29.067 44.0659 28.9276 44.1821 28.7944 44.2014C27.8664 44.3358 26.2684 44.5 24 44.5C21.7316 44.5 20.1336 44.3358 19.2056 44.2014C19.0724 44.1821 18.933 44.0659 18.9174 43.8484C18.9029 43.6462 18.8892 43.4518 18.876 43.2649C18.8043 42.2497 18.7481 41.4541 18.6672 40.8199C18.5695 40.0544 18.426 39.429 18.1241 38.8411C18.0636 38.7232 17.9982 38.6098 17.928 38.4996C17.952 38.4999 17.976 38.5 18 38.5H30Z" fill="white"/>
            </svg>
          </Icon>

        </div>
      </div>

      <p v-for=" p in $t('index.onboarding.paragraphs')" v-bind:key="p" class="" v-html="p" />

      <div v-if="$i18n.locale == 'de'" class="pt-6 flex flex-col space-y-2">
        <span class="font-bold">Bekannt aus</span>
        <div class="flex flex-row justify-start space-x-8 align-middle min-h-[42px]">
          <a 
            class="self-center" 
            target="_blank" 
            href="https://www.focus.de/digital/diese-apps-machen-es-moeglich-impfnachweis-auf-dem-smartphone-praktische-tipps-tricks-fuers-schnelle-laden_id_13467124.html">
            <img src="@/assets/logos/focus.svg" alt="Logo von Focus Online">
          </a>
          <a 
            class="self-center" 
            target="_blank" 
            href="https://www.chip.de/downloads/webapp-Covid-Pass-fuer-Apple-Wallet-erstellen_183693866.html">
            <img src="@/assets/logos/chip.svg" alt="Logo von Chip">
          </a>
          <a 
            class="self-center" 
            target="_blank" 
            href="https://www.iphone-ticker.de/covidpass-eu-webseite-uebertraegt-impfzertifikat-ins-iphone-wallet-176595/">
            <img src="@/assets/logos/ifun.svg" alt="Logo von ifun">
          </a>

        </div>
      </div>

      <button class="w-full bg-primary bg-opacity-20 text-primary text-xl font-medium rounded-lg py-5 px-3 focus:outline-none mt-8" @click="onboarded()">
        <span >
          <svg class="inline-block pr-1" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18L24 30L36 18" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          {{ $t('labels.next') }}
        </span>
      </button>
    </div>

    <div v-if="state == 1">
      <form @submit.prevent="consented" class="flex flex-col space-y-6 pt-2">
        
        <div>
          <p v-for=" p in $t('index.consent.paragraphs')" v-bind:key="p" class="" v-html="p" />
          <div class="flex flex-row justify-around break-normal space-x-4">
            
            <a href="https://github.com/philipptrenz/covidpass/" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.noStorage')">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1" fill="white">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M35 36H10C5.58172 36 2 32.4183 2 28C2 23.5817 5.58172 20 10 20C10.0553 20 10.1106 20.0006 10.1656 20.0017C11.1171 14.3254 16.0534 10 22 10C27.2799 10 31.7633 13.4099 33.3682 18.1476C33.8974 18.0506 34.4428 18 35 18C39.9706 18 44 22.0294 44 27C44 31.6326 40.5 35.4476 36 35.9451V36H35Z"/>
                  </mask>
                  <path d="M10.1656 20.0017L10.125 22.0013C11.1172 22.0214 11.9741 21.311 12.1381 20.3323L10.1656 20.0017ZM33.3682 18.1476L31.474 18.7893C31.7925 19.7294 32.7522 20.2936 33.7285 20.1148L33.3682 18.1476ZM36 35.9451L35.7802 33.9572C34.7669 34.0692 34 34.9255 34 35.9451H36ZM36 36V38C37.1046 38 38 37.1046 38 36H36ZM35 34H10V38H35V34ZM10 34C6.68629 34 4 31.3137 4 28H0C0 33.5228 4.47715 38 10 38V34ZM4 28C4 24.6863 6.68629 22 10 22V18C4.47715 18 0 22.4772 0 28H4ZM10 22C10.0418 22 10.0834 22.0004 10.125 22.0013L10.2062 18.0021C10.1377 18.0007 10.0689 18 10 18V22ZM12.1381 20.3323C12.9307 15.6036 17.0465 12 22 12V8C15.0603 8 9.30345 13.0472 8.19315 19.6711L12.1381 20.3323ZM22 12C26.3968 12 30.1357 14.8388 31.474 18.7893L35.2625 17.5058C33.3909 11.9809 28.1629 8 22 8V12ZM33.7285 20.1148C34.1394 20.0396 34.5642 20 35 20V16C34.3214 16 33.6554 16.0617 33.0079 16.1803L33.7285 20.1148ZM35 20C38.866 20 42 23.134 42 27H46C46 20.9249 41.0751 16 35 16V20ZM42 27C42 30.6018 39.2781 33.5705 35.7802 33.9572L36.2198 37.933C41.7218 37.3247 46 32.6634 46 27H42ZM34 35.9451V36H38V35.9451H34ZM36 34H35V38H36V34Z" fill="white" mask="url(#path-1-inside-1)"/>
                  <rect x="4.58579" y="40" width="50" height="4" rx="2" transform="rotate(-45 4.58579 40)" fill="white" stroke="#27215B" stroke-width="2"/>
                </svg>
              </Icon>
            </a>
            
            <a href="http://ko-fi.com/covidpass" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.noProfit')">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7313 10.269C24.0155 9.72882 21.2006 10.0061 18.6424 11.0657C16.0843 12.1253 13.8978 13.9197 12.3594 16.222C11.5777 17.3919 10.9813 18.6662 10.5836 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H10.1436C10.0484 22.6597 10 23.328 10 24C10 24.672 10.0484 25.3403 10.1436 26H19C19.5523 26 20 26.4477 20 27C20 27.5523 19.5523 28 19 28H10.5836C10.9813 29.3338 11.5777 30.6081 12.3594 31.778C13.8978 34.0803 16.0843 35.8747 18.6424 36.9343C21.2006 37.994 24.0155 38.2712 26.7313 37.731C29.447 37.1908 31.9416 35.8574 33.8995 33.8995C34.29 33.509 34.9232 33.509 35.3137 33.8995C35.7042 34.29 35.7042 34.9232 35.3137 35.3137C33.0761 37.5514 30.2251 39.0752 27.1214 39.6926C24.0177 40.3099 20.8007 39.9931 17.8771 38.7821C14.9534 37.5711 12.4546 35.5203 10.6965 32.8891C9.69211 31.386 8.95526 29.732 8.50806 28H5C4.44772 28 4 27.5523 4 27C4 26.4477 4.44772 26 5 26H8.12548C8.0422 25.339 8 24.6711 8 24C8 23.3289 8.0422 22.661 8.12548 22H5C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20H8.50807C8.95526 18.2681 9.69211 16.614 10.6965 15.1109C12.4546 12.4797 14.9534 10.4289 17.8771 9.21794C20.8007 8.00693 24.0177 7.69008 27.1214 8.30744C30.2251 8.92481 33.0761 10.4487 35.3137 12.6863C35.7042 13.0768 35.7042 13.71 35.3137 14.1005C34.9232 14.491 34.29 14.491 33.8995 14.1005C31.9416 12.1426 29.447 10.8092 26.7313 10.269Z" fill="white"/>
                  <rect x="4.58579" y="40" width="50" height="4" rx="2" transform="rotate(-45 4.58579 40)" fill="white" stroke="#27215B" stroke-width="2"/>
                </svg>
              </Icon>
            </a>

            <a href="https://github.com/philipptrenz/covidpass/" target="_blank" class="cursor-pointer flex-1">
              <Icon :text="$t('index.consent.icons.openSource')">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 1.92C18.842 1.92 13.8467 3.72581 9.88106 7.02409C5.91538 10.3224 3.22958 14.9049 2.2897 19.9766C1.34982 25.0483 2.21518 30.2889 4.73563 34.7892C7.09936 39.0097 10.7788 42.3292 15.1992 44.2502L19.9111 31.9724C18.3477 31.1706 17.0477 29.9229 16.1823 28.3776C15.1597 26.5514 14.8086 24.4248 15.1901 22.3668C15.5715 20.3088 16.6615 18.4493 18.2707 17.111C19.8799 15.7726 21.9069 15.0398 24 15.0398C26.0931 15.0398 28.1201 15.7726 29.7293 17.111C31.3385 18.4493 32.4285 20.3088 32.8099 22.3668C33.1914 24.4248 32.8403 26.5514 31.8177 28.3776C30.9523 29.9229 29.6523 31.1706 28.0889 31.9724L32.8008 44.2502C37.2212 42.3292 40.9006 39.0097 43.2644 34.7892C45.7848 30.2889 46.6502 25.0483 45.7103 19.9766C44.7704 14.9049 42.0846 10.3224 38.1189 7.02409C34.1533 3.72581 29.158 1.92 24 1.92ZM8.65332 5.54792C12.9638 1.96284 18.3935 0 24 0C29.6065 0 35.0362 1.96284 39.3467 5.54792C43.6572 9.13301 46.5765 14.1141 47.5982 19.6268C48.6198 25.1394 47.6792 30.8358 44.9395 35.7274C42.1999 40.619 37.8342 44.3971 32.6 46.4062C32.3623 46.4974 32.0981 46.4905 31.8655 46.3869C31.6329 46.2833 31.4509 46.0916 31.3597 45.8539L25.9709 31.8123C25.781 31.3173 26.0282 30.7621 26.5231 30.5721C28.0584 29.9827 29.3389 28.8744 30.1425 27.4395C30.946 26.0047 31.2218 24.3337 30.9221 22.7167C30.6224 21.0997 29.766 19.6387 28.5016 18.5871C27.2372 17.5356 25.6445 16.9598 24 16.9598C22.3555 16.9598 20.7628 17.5356 19.4984 18.5871C18.234 19.6387 17.3776 21.0997 17.0779 22.7167C16.7782 24.3337 17.054 26.0046 17.8576 27.4395C18.6611 28.8744 19.9416 29.9827 21.4769 30.5721C21.9718 30.7621 22.219 31.3173 22.0291 31.8123L16.6403 45.8539C16.5491 46.0916 16.3671 46.2833 16.1345 46.3869C15.9019 46.4905 15.6377 46.4974 15.4 46.4062C10.1658 44.3971 5.80008 40.619 3.06046 35.7274C0.320851 30.8358 -0.619766 25.1394 0.401844 19.6268C1.42345 14.1141 4.34281 9.13301 8.65332 5.54792Z" fill="white"/>
                </svg>
              </Icon>
            </a>

          </div>
        </div>

        <div class="flex flex-row ">
          <span class="flex flex-row justify-center" :class="!consentGiven && hintNotConsented ? 'text-error': ''">
            <input type="checkbox" v-model="consentGiven" :class="!consentGiven && hintNotConsented ? 'border-error': 'border-primary'" class="flex-shrink-0 check-background h-6 w-6 text-gray border-2 rounded-md bg-white checked:bg-primary appearance-none focus:outline-none">
            <span class="ml-2 md" v-html="this.$t('index.consent.inputText')"></span>
          </span>
        </div>

        <button class="bg-primary bg-opacity-20 text-primary text-xl font-medium rounded-lg py-5 px-3 focus:outline-none" >
          <span >
            <svg class="inline-block pr-1" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.5H8V20.5H20V8.5ZM8 6.5C6.89543 6.5 6 7.39543 6 8.5V20.5C6 21.6046 6.89543 22.5 8 22.5H20C21.1046 22.5 22 21.6046 22 20.5V8.5C22 7.39543 21.1046 6.5 20 6.5H8ZM12 13C12 12.7239 12.2239 12.5 12.5 12.5H15.5C15.7761 12.5 16 12.7239 16 13V16C16 16.2761 15.7761 16.5 15.5 16.5H12.5C12.2239 16.5 12 16.2761 12 16V13ZM26.5 26.5C26.2239 26.5 26 26.7239 26 27V30C26 30.2761 26.2239 30.5 26.5 30.5H29.5C29.7761 30.5 30 30.2761 30 30V27C30 26.7239 29.7761 26.5 29.5 26.5H26.5ZM26.5 38.5C26.2239 38.5 26 38.7239 26 39V42C26 42.2761 26.2239 42.5 26.5 42.5H29.5C29.7761 42.5 30 42.2761 30 42V39C30 38.7239 29.7761 38.5 29.5 38.5H26.5ZM32 33C32 32.7239 32.2239 32.5 32.5 32.5H35.5C35.7761 32.5 36 32.7239 36 33V36C36 36.2761 35.7761 36.5 35.5 36.5H32.5C32.2239 36.5 32 36.2761 32 36V33ZM38.5 38.5C38.2239 38.5 38 38.7239 38 39V42C38 42.2761 38.2239 42.5 38.5 42.5H41.5C41.7761 42.5 42 42.2761 42 42V39C42 38.7239 41.7761 38.5 41.5 38.5H38.5ZM38 27C38 26.7239 38.2239 26.5 38.5 26.5H41.5C41.7761 26.5 42 26.7239 42 27V30C42 30.2761 41.7761 30.5 41.5 30.5H38.5C38.2239 30.5 38 30.2761 38 30V27ZM8 28.5H20V40.5H8V28.5ZM6 28.5C6 27.3954 6.89543 26.5 8 26.5H20C21.1046 26.5 22 27.3954 22 28.5V40.5C22 41.6046 21.1046 42.5 20 42.5H8C6.89543 42.5 6 41.6046 6 40.5V28.5ZM12.5 32.5C12.2239 32.5 12 32.7239 12 33V36C12 36.2761 12.2239 36.5 12.5 36.5H15.5C15.7761 36.5 16 36.2761 16 36V33C16 32.7239 15.7761 32.5 15.5 32.5H12.5ZM40 8.5H28V20.5H40V8.5ZM28 6.5C26.8954 6.5 26 7.39543 26 8.5V20.5C26 21.6046 26.8954 22.5 28 22.5H40C41.1046 22.5 42 21.6046 42 20.5V8.5C42 7.39543 41.1046 6.5 40 6.5H28ZM32 13C32 12.7239 32.2239 12.5 32.5 12.5H35.5C35.7761 12.5 36 12.7239 36 13V16C36 16.2761 35.7761 16.5 35.5 16.5H32.5C32.2239 16.5 32 16.2761 32 16V13Z" fill="#27215B"/>
            </svg>
            {{ $t('index.consent.buttonText') }}
          </span>
        </button>
      </form>
    </div>

    <div v-show="state == 2">
      <div class="bg-primary bg-opacity-20 text-primary text-xl rounded-lg focus:outline-none text-center font-medium">
        <client-only>
          <qrcode-stream 
            v-if="!qrScannerDestroyed"
            @decode="onDecode" 
            @init="onInit" 
            :camera="state == 2 ? 'auto' : 'off'"
            :track="undefined"
            class="min-h-sm ">

            <div v-if="!qrScannerDestroyed && !qrScannerLoading && !qrScannerError" class="absolute top-0 left-0 w-full h-full z-50 flex flex-col justify-center align-middle p-6 text-white font-medium">
              <svg class="w-full h-full" viewBox="0 0 300 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22.5V2.5H22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M298 278.008V298.008H278" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M278 2.00806L298 2.00806V22.0081" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 298.008H2L2 278.008" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="pt-2">{{ scanHint }}</span>
            </div>
            <div v-if="!qrScannerDestroyed && !qrScannerLoading && !qrScannerError" class="absolute top-0 left-0 w-full h-full z-40 bg-primary opacity-40"></div>

            <div class="h-full flex flex-col justify-end space-y-2 p-5">

              <div class="flex-grow flex flex-col justify-center rounded-xl">

                <div class="text-medium text-center" v-if="qrScannerLoading">
                  {{ $t('labels.loading') }}
                </div>

                <div v-if="qrScannerError" class="h-full text-highlight text-sm text-center font-medium p-2 flex items-center justify-center">
                  <p>{{ qrScannerError }}</p>
                </div>

              </div>

              <button v-if="qrScannerError" @click="reloadQRScanner" class="w-full text-sm rounded-lg border-primary border-2 p-1 font-medium focus:outline-none">{{ $t('labels.tryAgain') }}</button>
              
            </div>

          </qrcode-stream>
        </client-only>
      </div>
    </div>

    <div v-show="state == 3 || state == 4" class="space-y-6">

      <div v-if="state == 3" class="bg-primary bg-opacity-20 text-primary text-xl rounded-lg py-5 px-3 focus:outline-none">
        <div class="flex justify-center align-middle">
          <div class="inline-block my-auto ">
            <span class="inline-block font-medium align-middle">
              <svg class="inline-block" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 24L18.5 36L40.5 14" stroke="#27215B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ $t('index.addToWallet.successMessage') }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col bg-primary text-white text-xl rounded-lg p-4 focus:outline-none ">
        
        <h1 class="">
          <span class="pl-2 inline-block align-middle font-semibold">
            <svg class="inline-block" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2801 11.0823L33.3333 15.6231L35.3865 11.0823L37.9468 12.5604L35.0408 16.6088L40 16.1164V19.0728L35.0407 18.5804L37.9468 22.6293L35.3864 24.1074L33.3333 19.5662L31.2802 24.1074L28.7198 22.6293L31.6259 18.5804L26.6666 19.0728V16.1164L31.6258 16.6088L28.7198 12.5604L31.2801 11.0823Z" fill="white"/>
            </svg>
            {{ 'COVID Pass' }}
          </span>
        </h1>

        <div class="flex flex-row align-middle justify-center py-14">
          <a ref="download" @click="downloaded" target="_system">
            <img :src="walletBadgeIcon" width="220" height="68" alt="Add to Apple Wallet" />
          </a>
        </div>

        <div>
          <p class="font-light text-xs leading-5" v-html="$t('index.addToWallet.note')"></p>

          <div class="flex flex-row flex-wrap ">
            <img class="pr-2 mt-4" width="160" height="30" src="icons/ios-settings.svg" alt="Apple iPhone iOS Privacy Settings description">

            <div class="bg-white rounded-lg flex-grow flex flex-row justify-between align-middle px-3 mt-4" style="min-width: 180px; height: 30px;">
              <span class="inline-block text-black text-xs" style="padding: 7.5px 0;">Wallet</span>
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3197 4.58833C16.5058 4.52016 17.6906 4.52562 18.8767 4.52562C18.8849 4.52562 24.8871 4.52562 24.8871 4.52562C26.0964 4.52562 27.2812 4.52016 28.4666 4.58833C29.5443 4.64968 30.5941 4.78057 31.6391 5.07301C33.8389 5.68788 35.7599 6.97217 37.1485 8.79294C38.5289 10.6021 39.276 12.8169 39.276 15.091C39.276 17.3678 38.5289 19.5812 37.1485 21.3904C35.7599 23.2105 33.8389 24.4955 31.6391 25.1104C30.5941 25.4028 29.5443 25.533 28.4666 25.595C27.2812 25.6632 26.0964 25.6571 24.9103 25.6571C24.9021 25.6571 18.8985 25.6577 18.8985 25.6577C17.6906 25.6571 16.5058 25.6632 15.3197 25.595C14.2426 25.533 13.1928 25.4028 12.1478 25.1104C9.94803 24.4955 8.02705 23.2105 6.63846 21.3904C5.25806 19.5812 4.51025 17.3678 4.51025 15.0917C4.51025 12.8169 5.25806 10.6021 6.63846 8.79294C8.02705 6.97217 9.94803 5.68788 12.1478 5.07301C13.1928 4.78057 14.2426 4.64968 15.3197 4.58833Z" fill="#787880" fill-opacity="0.16"/>
                <g filter="url(#filter0_dd)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0765 24.2943C20.159 24.2943 24.2792 20.1741 24.2792 15.0916C24.2792 10.009 20.159 5.88885 15.0765 5.88885C9.99397 5.88885 5.87378 10.009 5.87378 15.0916C5.87378 20.1741 9.99397 24.2943 15.0765 24.2943Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_dd" x="0.420326" y="2.48045" width="29.3123" height="29.3123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2.04505"/>
                <feGaussianBlur stdDeviation="0.340841"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2.04505"/>
                <feGaussianBlur stdDeviation="2.72673"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                </filter>
                </defs>
              </svg>
            </div>

          </div>

        </div>

      </div>

      <div v-if="state == 4" @click="tellYourFriends" class="cursor-pointer bg-primary bg-opacity-20 text-primary text-xl rounded-lg p-4 focus:outline-none" >
        <div class="flex justify-center align-middle">
          <div class="inline-block my-auto">
            <span class="inline-block font-medium align-middle px-2">
              <svg class="inline-block" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7071 3.29289C24.3166 2.90237 23.6834 2.90237 23.2929 3.29289L16.9289 9.65685C16.5384 10.0474 16.5384 10.6805 16.9289 11.0711C17.3195 11.4616 17.9526 11.4616 18.3431 11.0711L23 6.41421V22C23 22.5523 23.4477 23 24 23C24.5523 23 25 22.5523 25 22V6.41421L29.6569 11.0711C30.0474 11.4616 30.6805 11.4616 31.0711 11.0711C31.4616 10.6805 31.4616 10.0474 31.0711 9.65685L24.7071 3.29289ZM14 19C14 17.3431 15.3431 16 17 16H19.6C20.1523 16 20.6 15.5523 20.6 15C20.6 14.4477 20.1523 14 19.6 14H17C14.2386 14 12 16.2386 12 19V33C12 35.7614 14.2386 38 17 38H31C33.7614 38 36 35.7614 36 33V19C36 16.2386 33.7614 14 31 14H28.4C27.8477 14 27.4 14.4477 27.4 15C27.4 15.5523 27.8477 16 28.4 16H31C32.6569 16 34 17.3431 34 19V33C34 34.6569 32.6569 36 31 36H17C15.3431 36 14 34.6569 14 33V19Z" fill="#27215B"/>
              </svg>
              {{ $t('index.addToWallet.shareButtonText') }}
            </span>
          </div>
        </div>

      </div>

      <KofiButton v-if="state == 4" class="block" />

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

enum State {
  NONE = 0,
  ONBOARDED = 1,
  CONSENTED = 2,
  SCANNED = 3,
  DOWNLOADED = 4,
}

export default Vue.extend({
  layout: 'main',
  data() {
    return {
      state: State.NONE,
      consentGiven: false,
      hintNotConsented: false,
      qrScannerLoading: false,
      qrScannerDestroyed: false,
      qrScannerError: <string|null>null,
      scanHint: this.$t('index.scan.hint'),
      initial: true
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    const description = this.$t('seo.description');
    const applicationName = this.$t('seo.applicationName');
    return {
      title: this.$t('index.title') + ' – ' + this.$t('index.subtitle'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        /*{ hid: 'application-name', name: 'application-name', content: applicationName },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'twitter:description', name: 'twitter:description', content: description },*/
        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
  },
  computed: {
    walletBadgeIcon() {
      try {
        const locale = this.$i18n.locale
        return require(`assets/wallet-badges/Add_to_Apple_Wallet_rgb_${ locale.toUpperCase() }.svg`)
      } catch {
        return require(`assets/wallet-badges/Add_to_Apple_Wallet_rgb_US-UK.svg`)
      }
    }
  },
  methods: {
    toStep(step: State) {
      if (this.state > step) {
        this.state = step;
        this.scrollToTop();
      }
        
    },
    onboarded() {
      this.state = State.ONBOARDED;
      this.scrollToTop();
    },
    consented() {
      if (this.consentGiven) {
        this.state = State.CONSENTED;
        this.scrollToTop();
      } else 
        this.hintNotConsented = true;
    },
    onDecode(rawData: string) {
      try {
        const decoded = this.$hcertDecode(rawData)
        this.generate(rawData, decoded)
      } catch (error) {
        this.scanHint = this.$t('index.scan.errorHint')
        console.error('Invalid QR code found');
        this.reloadQRScanner();

        // TODO: Prompt user for wrong QR Code

      }
    },
    async onInit (promise: Promise<any>) {
      this.qrScannerLoading = true;
      this.qrScannerError = null;
      try {
        await promise
      } catch (error: any) {
        const errorString = <string>this.$t( 'index.scan.errors.' + error.name )
        if (errorString) {
          this.qrScannerError = errorString
        } else { 
          this.qrScannerError = error.name
        }
        console.warn("qr code reader error:", error)
      } finally {
        this.qrScannerLoading = false;
        if (this.initial) {
          this.initial = false;
        } else {
          this.scrollToTop();
        }
      }
    },
    async reloadQRScanner () {
      this.qrScannerDestroyed = true
      await this.$nextTick()
      this.qrScannerDestroyed = false
    },
    async generate(rawData: String, decodedData: String) {

      try {
        const pass = await this.$createPass({
            decoded: decodedData, 
            raw: rawData
          })
        
        if (!pass) {
          console.error('Error:', "Something went wrong.")

          // TODO: Prompt user

        } else {
          const passBlob = new Blob([pass], {type: "application/vnd.apple.pkpass"});
          const url = window.URL.createObjectURL(passBlob);
          const link = <HTMLLinkElement>this.$refs.download;
          link.href = url;
          link.setAttribute('download', `covidpass-${ this.randomId(8) }.pkpass`);

          this.state = State.SCANNED;
          this.scrollToTop();
        }
      } catch (e: any) {
        console.error('Error:', e.message)
      }
    },
    downloaded() {
      this.state = State.DOWNLOADED
      this.scrollToTop();
      this.$nuxt.$emit('downloaded', true);
    },
    async tellYourFriends() {
      const shareData = {
        title: document.title,
        text: this.$t('index.title') + ' – ' + this.$t('index.subtitle'),
        url: window.location.protocol + "//" + window.location.host,
      }
      try {
        await navigator.share(shareData)
        console.log("successfully shared")
      } catch(err) {
        console.error('Sharing failed: ' + err)
      }
    },
    randomId(length: number) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    scrollToTop() {
      document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
    }
  }
})
</script>

<style scoped>
.check-background:checked {
  background-image: url("data:image/svg+xml; utf8, <svg viewBox='-4 -6 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 7L5 11L15 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
