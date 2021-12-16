import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    charactersInfo: [],
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    },
    setCharactersInfo(state, payload) {
      state.charactersInfo = payload
    },
  },
  actions: {
    async getCharacters({ commit }, url) {
      try {
        const apiUrl = url ? url : 'https://rickandmortyapi.com/api/character'
        const response = await fetch(apiUrl)
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
        commit('setCharactersInfo', data.info)
      } catch (error) {
        console.error(error)
      }
    },
    filterByStatus({commit, state}, status) {
      const results = state.characters.filter((c) => c.status.includes(status))
      commit('setCharactersFilter', results)
    },
    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()
      const results = state.characters.filter((c) => {
        const characterName = c.name.toLowerCase()
        if (characterName.includes(formatName)) {
          return c
        }
      })
      commit('setCharactersFilter', results)
    }
  },
  modules: {},
})
