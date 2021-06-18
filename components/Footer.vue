<template>
  <div class="w-full flex flex-row justify-center text-sm">
    <div>
      <NuxtLink :to="localePath('/about')" class="underline">About Us</NuxtLink> | 
      <NuxtLink :to="localePath('/impress')" class="underline">Impress</NuxtLink> | 
      <NuxtLink :to="localePath('/privacy')" class="underline">Privacy</NuxtLink> |
      <a class="underline" href="https://github.com/philipptrenz/eudgc2pkpass">Github</a>
    </div>
  </div>
</template>