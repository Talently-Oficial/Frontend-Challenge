<template>
  <table class="table text-gray-400 border-separate space-y-6 text-sm relative">
    <thead class="sticky bg-gray-100 top-12 sm:top-16 z-10">
      <tr>
        <th v-for="(header, index) in headers" :key="`th-${index}`" class="p-3" :class="header.customClass">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <CharacterListTableRow v-for="character in characters" :key="`char-${character.id}`" :character="character" />
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex'

import headers from '@/constants/charactersListHeaders'

export default {
  data () {
    return {
      headers
    }
  },

  computed: {
    ...mapState('characters', ['characters'])
  }
}
</script>

<style>
.characters-list .table {
  border-spacing: 0 15px;
}

.characters-list .table tr {
  border-radius: 8px;
}

.characters-list .table tr:first-child {
  border-radius: 0px;
}

.characters-list tr td:last-child {
  border-radius: 0 .625rem .625rem 0;
}

.characters-list tr td:first-child {
  border-radius: .625rem 0 0 .625rem;
}
</style>
