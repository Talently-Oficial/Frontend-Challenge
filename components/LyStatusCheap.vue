<template>
  <div class="rounded-md px-2 text-center" :class="colors[text] || colors.default">
    <span class="text-white">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    // TODO document this "colors" property
    colors: {
      type: Object,
      default: () => ({
        Alive: 'bg-green-400',
        Death: 'bg-red-400',
        unknown: 'bg-gray-400'
      })
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
