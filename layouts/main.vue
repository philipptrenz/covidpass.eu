<template>
  <div class="min-h-screen bg-primary font-light">

    <!--<LanguagePicker class="text-white" />-->

    <div class="sm:hidden" style="height: 75vh;">
      <div class="w-full pt-6 bg-primary" >
        <img class="min-w-full" src="/mockup-wallet-mobile.png">
      </div>
    </div>

    <div class="pt-8 pb-8 h-full sm:min-h-screen flex flex-row px-4 md:px-6 space-x-6">
      <div class="flex-1 flex flex-col justify-center pr-2">
        <div>
          <Nuxt />
          <Footer class="pt-2 text-white" />
        </div>
      </div>
      
      <div class="flex-1 hidden sm:flex flex-row justify-center align-middle pl-2">
        <div class="h-full fixed float-right">
          <transition name="slide">
            <img class="h-full md:pt-8 lg:pt-16 object-cover object-left-bottom" src="/mockup-wallet-desktop.png" v-on:load="onLoaded" v-show="loaded">
          </transition>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      loaded: false
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true
    }
  }
  
})
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.slideback-leave-active,
.slideback-enter-active {
  transition: 1s;
}
.slideback-enter {
  transform: translate(-100%, 0);
}
.slideback-leave-to {
  transform: translate(100%, 0);
}
</style>