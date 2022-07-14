<script setup>
import ThePokemonImage from './ThePokemonImage.vue'
import json from '../data/gen8ou-1825.json'
const pokemons = json.data
const pokemon_array = Object.keys(pokemons)
const index=39
const pokemon_name = pokemon_array[index].toLowerCase()
const current_pokemon = pokemons[pokemon_array[index]]
</script>

<template>
    <div class="chart-container">
        <ThePokemonImage :pokemon_name="pokemon_name"/>
        <div class="chart">{{current_pokemon.usage}}</div>
        <div class="chart">{{current_pokemon['Viability Ceiling']}}</div>
        <div class="chart">{{current_pokemon['Raw count']}}</div>
        <div class="chart">{{current_pokemon['Moves']}}</div>
        <div class="chart">{{current_pokemon['Abilities']}}</div>
        <div class="chart">{{current_pokemon['Teammates']}}</div>
        <div class="chart">{{current_pokemon['Spreads']}}</div>
        <div class="chart">{{current_pokemon['Items']}}</div>
        <div class="chart">{{pokemon_array}}</div>
    </div>
</template>

<style>
@import '@/assets/pokesprite-pokemon-gen8.css';
.chart-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 2fr 1fr;
    height: 100vh;
    width: 100vw;
}

.chart-container .chart {
    border: 1px solid black;
}
</style>
