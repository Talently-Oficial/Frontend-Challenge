<template>
  <div class="h-screen w-screen flex bg-gray-100">
    <!-- container -->
    <DefaultLayoutSidebar />
    <div class="flex-1 flex flex-col max-h-scren">
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
