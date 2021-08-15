<template>
  <div class="h-screen w-screen flex bg-gray-100">
    <DefaultLayoutSidebar />
    <div class="flex-1 flex flex-col max-h-scren">
      <DefaultLayoutNavbar />
      <Nuxt />
    </div>
    <LySpinner v-if="fetchPending" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState(['fetchPending'])
  }
}
</script>
