<script setup>
import ThePokemonImage from './ThePokemonImage.vue'
import Speedometer from './Speedometer.vue'
import BarChart from './BarChart.vue'
import json from '../data/gen8ou-1825.json'
const pokemons = json.data
const pokemon_array = Object.keys(pokemons)
const index=69;
const pokemon_name = pokemon_array[index].toLowerCase()
const current_pokemon = pokemons[pokemon_array[index]]
</script>

<template>
    <div class="chart-container">
        <ThePokemonImage :pokemon_name="pokemon_name"/>
        <Speedometer :usage="current_pokemon.usage"/>
        <div class="chart">{{current_pokemon['Viability Ceiling']}}</div>
        <div class="chart">{{current_pokemon['Raw count']}}</div>
        <div class="chart">
            <h2>Moves</h2>
            <BarChart :data="current_pokemon['Moves']"/>
        </div>
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
    max-height: 100%;
}

.chart-container .chart {
    overflow: auto;
}

.chart-container .chart {
    border: 1px solid black;
    padding: 1rem;
}

.chart-container .chart h2{
    margin-bottom: 0.5rem; 
}
</style>
