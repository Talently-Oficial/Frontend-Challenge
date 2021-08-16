<template>
  <!-- component -->
  <aside
    class="hidden sm:flex flex-col items-center justify-center bg-white text-gray-700 shadow h-full border"
  >
    <!-- Side Nav Bar-->
    <ul>
      <li
        v-for="{path, iconStroke} in pages"
        :key="`sidebar-${path}`"
        class="content-box border-b-4 border-transparent"
        :class="{'border-blue-500 bg-gray-100': pageSelected === path}"
      >
        <NuxtLink
          :to="path"
          class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
        >
          <LySvg :stroke="iconStroke" class="text-blue-500" />
        </NuxtLink>
      </li>
      <li />
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  computed: {
    pageSelected () {
      return this.$route.path
    }
  }
}
</script>

<style>

</style>
