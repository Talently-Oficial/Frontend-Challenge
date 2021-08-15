<template>
  <button
    type="button"
    class="sm:hidden bg-blue-500 hover:bg-blue-600 h-12 w-12 rounded-full text-4xl text-white fixed bottom-10 right-8 shadow-md z-20"
    @click="onClick"
  >
    {{ innerText }}
  </button>
</template>

<script>
import iconStrokes from '@/utils/iconStrokes'

export default {
  props: {
    innerText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      iconStrokes
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
