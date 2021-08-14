<template>
  <div class="flex items-center justify-center bg-transparent characters-list">
    <div class="col-span-12">
      <div class="overflow-auto lg:overflow-visible">
        <table class="table text-gray-400 border-separate space-y-6 text-sm">
          <thead>
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
import { validateCharacters } from '@/utils/propCustomValidators'

export default {
  props: {
    characters: {
      type: Array,
      required: true,
      validator: validateCharacters
    }
  },
  data () {
    return {
      headers: [
        {
          title: 'Image',
          customClass: ''
        },
        {
          title: 'Name',
          customClass: ''
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
          title: 'Details',
          customClass: 'invisible'
        }
      ]
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

.characters-list tr td:last-child,
.characters-list tr th:last-child {
  border-radius: 0 .625rem .625rem 0;
}

.characters-list tr td:first-child,
.characters-list tr th:first-child {
  border-radius: .625rem 0 0 .625rem;
}
</style>
