<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePokemonStore } from '@/stores/pokemons'
const pokemon_data = usePokemonStore();
const pokemonsSorted = pokemon_data.keys.sort(function(a,b) {
  return pokemon_data.pokemons[b].usage - pokemon_data.pokemons[a].usage
});
</script>

<template>
  <header>
    <nav>
      <RouterLink 
        v-for="pokemon in pokemonsSorted" 
        :to="{ params: {pokemon: pokemon}}">
          <span 
            class="pokesprite pokemon-gen8 nav-pokemon" 
            :class="pokemon_data.pokemonImageName(pokemon)"/>
      </RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  margin: 0 auto;
  font-weight: normal;
}

nav {
  --pixel-size: 1;
  width: var(--navbar-size);
  height: 100vh;
  position: fixed;
  background-color: black;
  overflow: auto;
}

main {
  margin-left: var(--navbar-size);
}

nav .nav-pokemon:hover {
  background-color: gray; 
}

nav .router-link-active .nav-pokemon{
  background-color: green;
}

</style>
