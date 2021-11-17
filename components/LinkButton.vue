<template>
  <a 
    :href="href"
    target="_blank"
    class="cursor-pointer w-full h-16 bg-btn hover:bg-btn-hover active:bg-btn-active text-primary text-xl font-medium rounded-lg px-3 flex flex-row justify-center align-middle space-x-2 transition duration-150" >

      <span class="h-12 w-12 self-center pr-2">
        <slot></slot>
      </span>

      <span v-if="text" v-text="text" class="self-center"></span>

  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    href: String,
    text: String,
  }
})
</script>