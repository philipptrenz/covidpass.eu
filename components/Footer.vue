<template>
  <div class="w-full flex flex-row justify-center text-xs font-light">
    <div class="w-full max-w-md flex flex-row flex-wrap justify-around px-6">

      <div> 
        <NuxtLink :to="localePath('/about')" class="px-1">{{ $t('about.title') }}</NuxtLink> 
        <span>|</span> 
        <NuxtLink :to="localePath('/impress')" class="px-1">{{ $t('impress.title') }}</NuxtLink>
        <span>|</span> 
        <NuxtLink :to="localePath('/privacy')" class="px-1">{{ $t('privacy.title') }}</NuxtLink>
        <span>|</span> 
      </div>

      <div>
        <a class="px-1" href="https://github.com/philipptrenz/covidpass" target="_blank">Github</a>
        <span>|</span> 
        <a class="px-1" href="https://github.com/philipptrenz/covidpass/issues/new" target="_blank">{{ $t('labels.reportIssue') }}</a> |

        <select id="select" ref="select" v-model="$i18n.locale" class="uppercase appearance-none bg-transparent border-none rounded-none pr-4 focus:outline-none px-1">
          <option
            class="appearance-none bg-none"
            v-for="lang in $i18n.locales"
            :key="lang"
            :value="lang"
            >{{ lang }}</option
          >
        </select>
      </div>

    </div>
  </div>
</template>

<style scoped>
#select {
  background-image: url("data:image/svg+xml; utf8, <svg class='inline-block' width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.30005 6L8.30005 10L12.3 6' stroke='white' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-size: right;
  background-position-x: 20px;
}
</style>