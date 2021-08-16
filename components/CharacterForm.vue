<template>
  <div class="CharacterForm">
    <div class="mt-8">
      <div class="grid grid-cols-1 gap-6">
        <LyInputText v-model="form.name" label="Name" />

        <LyInputSelect
          v-model="form.status"
          label="Status"
          :options="statuses"
        />

        <LyInputText v-model="form.species" label="Species" />

        <LyInputSelect
          v-model="form.gender"
          label="Gender"
          :options="genders"
        />

        <LyInputText v-model="form.url" label="URL" />

        <LyButton inner-text="Create character" @click="sendForm" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import statuses from '@/constants/statuses'
import genders from '@/constants/genders'

export default {
  data () {
    return {
      statuses,
      genders,
      form: {
        name: '',
        status: null,
        species: '',
        gender: null,
        url: ''
      }
    }
  },

  mounted () {
    this.fetchInitialFormFields()
  },

  methods: {
    ...mapActions('characters', ['createNewCharacter']),

    generateRequestBody (form) {
      return ({
        ...form,
        status: form.status.value,
        gender: form.gender.value,
        created: form.created
      })
    },

    async sendForm () {
      try {
        this.validateForm(this.form)

        const created = this.$dayjs().format('YYYY-MM-DD')

        const character = this.generateRequestBody({ ...this.form, created })

        const successMessage = await this.createNewCharacter(character)

        this.$store.dispatch('showSuccessAlert', successMessage)
      } catch (error) {
        this.$store.dispatch('showErrorAlert', error)
        console.error(error)
      }
    },

    fetchInitialFormFields () {
      this.form.status = statuses[0]
      this.form.gender = genders[0]
    },

    validateForm (form) {
      const entries = Object.entries(form)

      const isFilled = ([_, fieldValue]) => !!fieldValue

      const isValid = entries.every(isFilled)

      if (!isValid) {
        throw new Error('Please fill all the fields before continue')
      }
    }
  }
}
</script>
