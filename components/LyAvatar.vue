<template>
  <div class="flex align-items-center">
    <img class="rounded-full h-12 w-12  object-cover" :src="image" alt="unsplash image">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alternativeImage: {
      type: String,
      default: '/images/alternative-image.png'
    }
  },
  computed: {
    image () {
      return this.src || this.alternativeImage
    }
  }
}
</script>
