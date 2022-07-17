import { defineStore } from 'pinia'
import json from '../data/gen8ou-1825.json'

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    pokemons: json.data,
  }),
  getters: {
    keys: (state) => Object.keys(state.pokemons)
  }
})
