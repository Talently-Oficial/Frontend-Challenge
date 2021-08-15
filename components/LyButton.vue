<template>
  <button type="button" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="onClick">
    {{ innerText }}
  </button>
</template>

<script>
export default {
  props: {
    innerText: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
