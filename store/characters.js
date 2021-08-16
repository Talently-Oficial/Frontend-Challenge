export const state = () => ({
  pagination: {},
  characters: []
})

export const mutations = {
  SET_PAGINATION (state, newState) {
    state.pagination = newState
  },
  SER_CHARACTERS_LIST (state, newState) {
    state.characters = newState
  },
  ADD_CHARACTER_TO_THE_LIST (state, character) {
    state.characters.unshift(character)
  }
}

export const actions = {
  async getPaginatedCharacters ({ commit }) {
    try {
      const { data: { info, results } } = await this.$axios('/character')

      commit('SET_PAGINATION', info)
      commit('SER_CHARACTERS_LIST', results)
    } catch (err) {
      throw new Error(err)
    }
  },
  createNewCharacter ({ commit }, character) {
    try {
      // Here goes the POST request
      commit('ADD_CHARACTER_TO_THE_LIST', character)

      return Promise.resolve('Character created')
    } catch (error) {
      const rejectReason = new Error('Error while saving the new character:', error)

      return Promise.reject(rejectReason)
    }
  }
}
