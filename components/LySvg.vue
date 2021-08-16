<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    v-html="stroke"
  />
  <!--eslint-enable-->
</template>

<script>
export default {
  props: {
    stroke: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
