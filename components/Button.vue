<template>
  <button 
    @click="$emit('click')"
    class="cursor-pointer w-full bg-btn text-primary text-xl font-medium rounded-lg px-3 flex flex-row justify-center align-middle space-x-2 transition duration-150"
    :class="disabled ? 'cursor-default': 'hover:bg-btn-hover active:bg-btn-active'"
  >
      <span v-if="this.$slots.default" class="h-12 w-12 self-center">
        <slot></slot>
      </span>

      <span v-if="text" v-text="text" class="self-center py-4"></span>

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