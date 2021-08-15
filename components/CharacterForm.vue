<template>
  <div class="CharacterForm">
    <div class="mt-8">
      <div class="grid grid-cols-1 gap-6">
        <LyInputText v-model="name" label="Name" />
        <LyInputSelect v-model="status" label="Status" :options="statuses" />
        <label class="block">
          <span class="text-gray-700">Created</span>
          <input type="date" class="mt-1 w-full block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      status: null,
      statuses: [
        {
          text: 'Alive',
          value: 'Alive'
        },
        {
          text: 'Dead',
          value: 'Dead'
        },
        {
          text: 'unknown',
          value: 'unknown'
        }
      ]
    }
  },
  mounted () {
    this.fetchInitialFields()
  },
  methods: {
    fetchInitialFields () {
      this.status = this.statuses[2]
    }
  }
}
</script>
