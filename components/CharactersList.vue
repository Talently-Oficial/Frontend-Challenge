<template>
  <div class="flex flex-col items-center justify-center bg-transparent characters-list">
    <CharactersListHeader title="List of Characters" :characters-count="charactersCount" />
    <LyFloatingActionButton inner-text="+" @click="goToAddCharacter" />
    <div class="col-span-12 px-6 sm:px-auto">
      <div class="lg:overflow-visible pb-20 sm:pb-0">
        <table class="table text-gray-400 border-separate space-y-6 text-sm relative">
          <thead class="sticky bg-gray-100 top-12 sm:top-16 z-10">
            <tr>
              <th v-for="(header, index) in headers" :key="`th-${index}`" class="p-3" :class="header.customClass">
                {{ header.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="character in characters" :key="`char-${character.id}`" class="bg-white">
              <td class="p-3">
                <LyAvatar :src="character.image" />
              </td>
              <td class="p-3 font-bold">
                {{ character.name }}
              </td>
              <td class="p-3 hidden sm:table-cell">
                <LyStatusCheap :text="character.status" />
              </td>
              <td class="p-3">
                {{ character.species }}
              </td>
              <td class="p-3 hidden sm:table-cell">
                {{ character.gender }}
              </td>
              <td class="p-3 hidden sm:table-cell">
                {{ character.created | formatdate }}
              </td>
              <td class="p-3 font-semibold text-blue-500">
                <a :href="character.url" target="_blank">
                  Details
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          title: 'Image',
          customClass: ''
        },
        {
          title: 'Name',
          customClass: 'text-left'
        },
        {
          title: 'Status',
          customClass: 'hidden sm:table-cell'
        },
        {
          title: 'Species',
          customClass: ''
        },
        {
          title: 'Gender',
          customClass: 'hidden sm:table-cell'
        },
        {
          title: 'Created',
          customClass: 'hidden sm:table-cell'
        },
        {
          title: '',
          customClass: ''
        }
      ],
      pagination: {},
      characters: []
    }
  },
  async fetch () {
    const { data: { info, results } } = await this.$axios('/character')

    this.pagination = info
    this.characters = results
  },
  computed: {
    charactersCount () {
      return this.pagination.count || 0
    }
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
    goToAddCharacter () {
      this.$router.push({ name: 'add-character' })
    }
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
