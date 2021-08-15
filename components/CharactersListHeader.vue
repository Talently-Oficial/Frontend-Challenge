<template>
  <div class="flex flex-row py-4 px-8 w-full sticky -top-1 sm:top-0 bg-gray-100 z-10">
    <h1 class="text-2xl">
      List of characters
    </h1>
    <span class="text-xs ml-2">{{ charactersCount | numToString }} Total</span>
    <LyButton inner-text="+ Add Character" class="ml-auto hidden sm:inline-block" @click="goToAddCharacter" />
  </div>
</template>

<script>
export default {
  props: {
    charactersCount: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToAddCharacter () {
      this.$router.push({ name: 'add-character' })
    }
  }
}
</script>

<style scoped>
.text-2xl,
.text-xs {
  margin-top: auto;
}

.text-2xl {
  line-height: 1.5rem;
}
</style>
