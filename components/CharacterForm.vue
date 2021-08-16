<template>
  <div class="CharacterForm">
    <div class="mt-8">
      <div class="grid grid-cols-1 gap-6">
        <LyInputText v-model="name" label="Name" />
        <LyInputSelect v-model="status" label="Status" :options="statuses" />
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
      // created: this.$dayjs().format('YYYY-MM-DD')
    }
  }
}
</script>
