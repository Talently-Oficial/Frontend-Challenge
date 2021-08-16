<template>
  <div class="overflow-auto">
    <div class="flex flex-col items-center justify-center bg-transparent characters-list">
      <CharactersListHeader title="List of Characters" :characters-count="charactersCount" />
      <LyFloatingActionButton inner-text="+" @click="goToAddCharacter" />
      <div class="col-span-12 px-6 sm:px-auto">
        <div class="lg:overflow-visible pb-20 sm:pb-0">
          <CharactersList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',

  computed: {
    ...mapState('characters', ['pagination']),
    charactersCount () {
      return this.pagination?.count || 0
    }
  },

  methods: {
    goToAddCharacter () {
      this.$router.push({ name: 'add-character' })
    }
  }
}
</script>
