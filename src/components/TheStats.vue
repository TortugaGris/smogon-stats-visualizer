<script setup>
import json from '../data/gen8ou-1825.json'
const pokemons = json.data
const pokemon_array = Object.keys(pokemons)
const index=47
const pokemon_name = pokemon_array[index].toLowerCase()
</script>

<template>
    <div class="chart-container">
        <span class="pokesprite pokemon-gen8 profile" :class="pokemon_name"></span>
        <div class="chart">{{pokemons[pokemon_array[index]].usage}}</div>
        <div class="chart">{{pokemons[pokemon_array[index]]['Viability Ceiling']}}</div>
        <div class="chart">{{pokemons[pokemon_array[index]]['Raw count']}}</div>
        <div class="chart">{{pokemons[pokemon_array[index]]['Moves']}}</div>
        <div class="chart">{{pokemons[pokemon_array[index]]['Abilities']}}</div>
        <div class="chart">{{pokemons[pokemon_array[index]]['Teammates']}}</div>
        <div class="chart">{{pokemons[pokemon_array[index]]['Spreads']}}</div>
        <div class="chart">{{pokemons[pokemon_array[index]]['Items']}}</div>
        <div class="chart">{{Object.keys(pokemons[pokemon_array[index]])}}</div>
    </div>
</template>

<style>
@import '@/assets/pokesprite-pokemon-gen8.css';
.profile {
    --pixel-size: 5;
    justify-self: center;
}
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
