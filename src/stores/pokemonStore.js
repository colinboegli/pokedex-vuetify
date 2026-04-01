import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    types: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    totalPokemons: (state) => state.pokemons.length,

    getPokemonById: (state) => {
      return (pokemonId) => {
        return state.pokemons.find(pokemon => pokemon.id === pokemonId)
      }
    },
  },

  actions: {
    async fetchPokemons() {
      try {
        const response = await fetch('http://localhost:3535/pokemons')

        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`)
        }

        const data = await response.json()
        this.pokemons = data
      } catch (error) {
        this.error = error.message || 'Erreur lors du chargement des Pokémon'
        throw error
      }
    },

    async fetchTypes() {
      try {
        const response = await fetch('http://localhost:3535/types')

        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`)
        }

        const data = await response.json()
        this.types = data
      } catch (error) {
        this.error = error.message || 'Erreur lors du chargement des types'
        throw error
      }
    },

    async init() {
      this.isLoading = true
      this.error = null

      try {
        await Promise.all([
          this.fetchPokemons(),
          this.fetchTypes(),
        ])
      } catch (error) {
        this.error = 'Erreur lors du chargement des données'
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
  },
})
