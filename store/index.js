const initialAlertState = {
  type: '',
  message: ''
}

export const state = () => ({
  fetchPending: false,
  alertOptions: initialAlertState
})

export const mutations = {
  setFetchPendingState (state, newState) {
    state.fetchPending = newState
  },

  showAlert (state, options) {
    state.alertOptions = { ...options }
  },

  resetAlert (state) {
    state.alertOptions = initialAlertState
  }
}

export const actions = {
  showSuccessAlert ({ commit }, message) {
    const options = {
      type: 'success',
      message
    }

    commit('showAlert', options)
  },

  showErrorAlert ({ commit }, message) {
    const options = {
      type: 'error',
      message
    }

    commit('showAlert', options)
  }
}
