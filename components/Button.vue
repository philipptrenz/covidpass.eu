<template>
  <button 
    @click="$emit('click')"
    class="cursor-pointer w-full h-16 bg-btn text-primary text-xl font-medium rounded-lg px-3 flex flex-row justify-center align-middle space-x-2 transition duration-150"
    :class="disabled ? 'cursor-default': 'hover:bg-btn-hover active:bg-btn-active'"
  >
      <span class="h-12 w-12 self-center">
        <slot></slot>
      </span>

      <span v-if="text" v-text="text" class="self-center"></span>

  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: String,
    disabled: Boolean
  }
})
</script>