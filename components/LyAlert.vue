<template>
  <transition name="fade" mode="out-in">
    <div v-show="visible" class="LyAlert fixed top-4 right-4">
      <div
        class="px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
        :class="containerColors[type]"
      >
        <LySvg
          cviewBox="0 0 24 24"
          class="w-5 h-5 sm:w-5 sm:h-5 mr-3"
          :class="colors[type]"
          :stroke="icons[type] || ''"
        />
        <span class="text-green-800"> {{ message }} </span>
      </div>
    </div>
  </transition>
</template>

<script>
import iconStrokes from '@/utils/iconStrokes'

export default {
  data () {
    return {
      icons: {
        success: iconStrokes.alertSuccess,
        error: iconStrokes.alertError
      },
      colors: {
        success: 'text-green-600',
        error: 'text-red-600'
      },
      containerColors: {
        success: 'bg-green-200',
        error: 'bg-red-200'
      },
      visible: false
    }
  },

  computed: {
    _options () {
      return this.$store.state.alertOptions
    },
    type () {
      return this._options.type
    },
    message () {
      return this._options.message
    }
  },

  watch: {
    _options: {
      deep: true,
      handler ({ message }) {
        if (message) { this.showAlert() }
      }
    }
  },

  methods: {
    showAlert () {
      this.visible = true

      setTimeout(() => {
        this.visible = false
        this.$store.commit('resetAlert')
      }, 2000)
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
