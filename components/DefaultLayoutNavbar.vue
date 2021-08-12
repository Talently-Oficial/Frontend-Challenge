<template>
  <nav class="px-4 flex justify-between bg-white h-16 border-b-2">
    <!-- top bar left -->
    <ul class="flex items-center">
      <!-- add button -->
      <li class="h-6 w-6">
        <img
          class="h-full w-full mx-auto"
          src="/logos/tailwind-logo.svg"
          alt="tailwind logo"
        >
      </li>
    </ul>

    <div class="flex items-center">
      <h1 class="hidden md:block pl-8 lg:pl-0 text-gray-700">
        Add a new character
      </h1>
      <div class="md:hidden">
        <LySelect :options="routes" :value="routes[0]" @input="goToRoute" />
      </div>
    </div>

    <!-- to bar right  -->
    <ul class="flex items-center visible sm:invisible">
      <li class="pr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bell"
        >
          <path
            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
          />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        {
          text: 'List of characters',
          value: 'index'
        },
        {
          text: 'Add a new character',
          value: 'add-character'
        }
      ]
    }
  },
  methods: {
    goToRoute (route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style>

</style>
