<template>
  <CharactersList :characters="characters" />
</template>

<script>
import { characters } from '@/mocks/table'

export default {
  data () {
    return {
      characters
    }
  }
}
</script>
