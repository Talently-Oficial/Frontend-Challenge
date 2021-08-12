<template>
  <!-- component -->
  <aside
    class="hidden md:flex flex-col items-center justify-center bg-white text-gray-700 shadow h-full border"
  >
    <!-- Side Nav Bar-->
    <ul>
      <li class="hover:bg-gray-100">
        <NuxtLink
          to="/"
          class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
        >
          <img src="@/assets/icons/list-icon.svg" width="24" height="24" alt="go to list of characters">
        </NuxtLink>
      </li>

      <li class="hover:bg-gray-100">
        <NuxtLink
          to="add-character"
          class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
        >
          <img src="@/assets/icons/add-document-icon.svg" width="24" height="24" alt="go to add character">
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
}
</script>

<style>

</style>
