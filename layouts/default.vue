<template>
  <div class="h-screen w-screen flex bg-gray-100">
    <DefaultLayoutSidebar :pages="pages" />

    <div class="flex-1 flex flex-col max-h-scren">
      <DefaultLayoutNavbar :pages="pages" />
      <Nuxt />
    </div>

    <LySpinner v-if="fetchPending" />

    <LyAlert />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import pages from '@/constants/pages'

export default {
  name: 'DefaultLayout',

  data () {
    return {
      pages
    }
  },

  fetch () {
    this.getPaginatedCharacters()
  },

  computed: {
    ...mapState(['fetchPending'])
  },

  watch: {
    '$fetchState.pending': {
      deep: true,
      handler (newVal) {
        this.$store.commit('setFetchPendingState', newVal)
      }
    }
  },

  methods: {
    ...mapActions('characters', ['getPaginatedCharacters'])
  }

}
</script>
