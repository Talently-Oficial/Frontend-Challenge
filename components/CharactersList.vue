<template>
  <div class="flex items-center justify-center bg-transparent">
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
              <td class="p-3">
                {{ character.species }}
              </td>
              <td class="p-3 hidden sm:table-cell">
                <LyStatusCheap :text="character.status" />
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
  props: {
    headers: {
      type: Array,
      required: true
    },
    characters: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n+5),
tr th:nth-child(n+5) {
  border-radius: 0 .625rem .625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: .625rem 0 0 .625rem;
}
</style>
