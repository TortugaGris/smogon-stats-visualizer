import { defineStore } from 'pinia'
import json from '../data/gen8ou-1825.json'

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    pokemons: json.data,
  }),
  getters: {
    keys: (state) => Object.keys(state.pokemons),
    pokemonImageName: () => {
      return (pokemon_name) => {
        let tmp_name = pokemon_name
          .toLowerCase()
          .replace(' ', '-')
          .replace('.', '')
          .replace('%', '');
        if (tmp_name === 'urshifu-rapid-strike') {
          return 'urshifu';
        } else {
          return tmp_name;
        }
      }
    },
  }
})
