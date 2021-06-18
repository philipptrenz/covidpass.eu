<template>
  <div class="border-solid border-2 rounded-2xl p-4" >
        
    <h2 class="text-lg font-bold" @click="$emit('to-step', step)">{{ $t('labels.step') }} {{ step }}: {{ title }}</h2>

    <div v-show="outerState == step" class="pt-3">

      <slot />

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    step: Number,
    title: String,
    outerState: Number,
  }
})
</script>
