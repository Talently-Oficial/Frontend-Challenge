export const state = () => ({
  fetchPending: false
})

export const mutations = {
  setFetchPendingState (state, newState) {
    state.fetchPending = newState
  }
}
