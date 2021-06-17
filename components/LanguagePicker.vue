<template>
  <div class="w-full flex flex-row justify-end">
    <span v-for="(code, index) in langCodes" v-bind:key="code" @click="$emit('change', code)">
      <button class="uppercase px-1 focus:outline-none" :class="selected == code ? 'font-bold tracking-normal' : ''">{{ code }}</button>
      <span v-if="index < langCodes.length-1">|</span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    langCodes: Array,
    selected: String,
  }
})
</script>