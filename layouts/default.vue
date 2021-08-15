<template>
  <div class="h-screen w-screen flex bg-gray-100">
    <DefaultLayoutSidebar :pages="pages" />
    <div class="flex-1 flex flex-col max-h-scren">
      <DefaultLayoutNavbar :pages="pages" />
      <Nuxt />
    </div>
    <LySpinner v-if="fetchPending" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import pages from '@/constants/pages'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      pages
    }
  },
  computed: {
    ...mapState(['fetchPending'])
  }
}
</script>
