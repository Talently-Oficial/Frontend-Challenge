<template>
  <div class="h-screen w-screen flex bg-gray-200">
    <!-- container -->
    <DefaultLayoutSidebar />
    <div class="flex-1 flex flex-col">
      <DefaultLayoutNavbar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>

</style>
