<template>
  <label class="LyInputSelect block">
    <span v-if="label" class="text-gray-700">{{ label }}</span>
    <select
      v-model="localValue"
      class="block mt-1 w-full rounded-md border-gray-300 shadow-sm"
      :class="classes || 'focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'"
    >
      <option
        v-for="(option, index) in options"
        :key="`select-${option.value}-${index}`"
        :value="option"
      >
        {{ option.text }}
      </option>
    </select>
  </label>
</template>

<script>
import { validateSelectOptions } from '@/utils/propCustomValidators'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    /**
    * @typedef Option
    * @type {Object}
    * @property {String} text text to be shown in the option element
    * @property {String} value value of the option element
    */
    options: {
      type: Array, // Array<Option>
      required: true,
      validator: validateSelectOptions
    },
    value: {
      type: Object,
      default: null
    },
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    localValue: {
      get () {
        return this.value || this.options[0]
      },
      set (option) {
        this.$emit('input', option)
      }
    }
  }
}
</script>

<style>

</style>
