<template>
  <tr class="bg-white">
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
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
