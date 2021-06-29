<template>
  <div class="flex flex-col items-center flex-1 pt-6">
    <div class="bg-primary rounded-full h-16 w-16 flex justify-center items-center">
      <slot></slot>
    </div>
    <span class="text-center pt-1">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: String
  }
})
</script>