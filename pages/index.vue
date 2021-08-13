<template>
  <CharactersList :headers="headers" :characters="characters" />
</template>

<script>
import { characters } from '@/mocks/table'

export default {
  data () {
    return {
      characters,
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
          title: 'Specie',
          customClass: ''
        },
        {
          title: 'Status',
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
