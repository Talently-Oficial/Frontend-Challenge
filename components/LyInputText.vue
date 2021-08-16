<template>
  <label class="block">
    <span v-if="label" class="text-gray-700 uppercase">{{ label }}</span>
    <input v-model="innerValue" type="text" class="mt-1 w-full block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" :placeholder="placeholder">
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style>

</style>
