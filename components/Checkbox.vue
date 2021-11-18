<template>
  <input 
    value="0"
    :checked="checked"
    @change="change"
    type="checkbox" 
    :class="error ? 'border-error': 'border-primary'" 
    class="
      flex-shrink-0 
      h-6 w-6 text-gray border-2 rounded-md appearance-none focus:outline-none
      bg-checkbox hover:bg-checkbox-hover active:bg-checkbox-active 
      checked:bg-checkbox-checked hover:checked:first:bg-checkbox-checked-hover active:checked:bg-checkbox-checked-active
      transition duration-150
      bg-no-repeat bg-cover bg-tick
    "
  />
</template>

<script>
export default {
  props: {
    value: { 
      type: Boolean 
    },
    error: { 
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: this.value
    }
  },
  methods: {
    change() {
      this.checked = !this.checked;
      this.$emit('input', this.checked);
    }
  }
}
</script>

<style scoped>
.bg-tick:checked {
  background-image: url("data:image/svg+xml; utf8, <svg viewBox='-4 -6 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 7L5 11L15 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>") !important;
}
</style>