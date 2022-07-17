<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePokemonStore } from '@/stores/pokemons'
const pokemon_data = usePokemonStore();
</script>

<template>
  <header>
    <nav>
      <RouterLink 
        v-for="pokemon in pokemon_data.keys" 
        :to="'/' + pokemon">
          <span 
            class="pokesprite pokemon-gen8" 
            :class="pokemon.toLowerCase().replace(' ', '-')"/>
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
  background-color: black;
  width: var(--navbar-size);
  height: 100vh;
  position: fixed;
  overflow: auto;
}

main {
  margin-left: var(--navbar-size);
}

</style>
