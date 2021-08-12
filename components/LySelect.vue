<template>
  <div class="LySelect cursor-pointer">
    <!-- select input -->
    <div class="p-2 bg-gray-50" @click="toggleSelecting">
      <span class="LySelect__selected-value">{{ localValue.text }}</span>
    </div>
    <!-- select options -->
    <ul v-if="selecting" class="LySelect__options-list bg-gray-50 border">
      <li
        v-for="option in options"
        :key="`option-${option.text}-${option.value}`"
        class="hover:bg-gray-200 p-1"
        @click="changeSelectedValue(option)"
      >
        {{ option.text }}
      </li>
    </ul>
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
  methods: {
    toggleSelecting () {
      this.selecting = !this.selecting
    },
    changeSelectedValue (option) {
      this.localValue = option

      const valueToBeReturned = this.returnObject ? option : option.value
      this.$emit('input', valueToBeReturned)

      this.toggleSelecting()
    }
  }
}
</script>

<style>
.LySelect {
  max-height: 2rem;
}

.LySelect__selected-value::after {
  content: url("/icons/down-arrow.svg");
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  margin: auto;
  margin-left: 0.5rem;
}

.LySelect__options-list {
  position: relative;
}
</style>
