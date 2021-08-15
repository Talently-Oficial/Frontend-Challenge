<template>
  <div class="LySelect">
    <select v-model="localValue" class="bg-white focus:outline-none border-0">
      <option v-for="option in options" :key="`option-${option.text}-${option.value}`" class="hover:bg-gray-200 p-1" :value="option">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { validateSelectOptions } from '@/utils/propCustomValidators'

export default {
  props: {
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
    returnObject: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      localValue: this.value,
      selecting: false
    }
  },
  watch: {
    value (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.localValue = newValue
      }
    },
    localValue (option) {
      const valueToBeReturned = this.returnObject ? option : option.value
      this.$emit('input', valueToBeReturned)
    }
  }
}
</script>

<style>
.LySelect {
  max-height: 2.5rem;
}
</style>
