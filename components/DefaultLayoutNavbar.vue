<template>
  <nav class="px-4 flex justify-between bg-white h-16 border-b-2 sticky">
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
      <div class="visible sm:invisible pl-8 py-5 lg:pl-0 text-gray-700">
        <LyInputSelect v-model="pageSelected" :options="pages" classes="border-none shadow-none focus:border-none focus:ring-white" />
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
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  computed: {
    pageSelected: {
      get () {
        return this.pages.find(({ path }) => path === this.$route.path)
      },
      set (page) {
        this.goToPage(page)
      }
    }
  },
  methods: {
    goToPage ({ path }) {
      this.$router.push({ path })
    }
  }
}
</script>
