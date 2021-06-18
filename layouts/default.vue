<template>
  <div class="min-h-screen px-4 pt-2 pb-3 flex flex-col justify-between">

    <LanguagePicker :selected="selectedLanguage" :langCodes="availableLanguages" @change="changeLanguage" />

    <div class="flex h-full pt-4 sm:pt-0">
      
      <Nuxt />

    </div>

    <Footer class="" />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      selectedLanguage: "en",
      availableLanguages: [ 'en' ],
    }
  },
  methods: {
    changeLanguage(newLanguage: string) {
      console.log("switched language to:", newLanguage)
      this.selectedLanguage = newLanguage
    }
  }
})
</script>