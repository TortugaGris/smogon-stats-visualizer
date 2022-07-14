<script setup>
import ThePokemonImage from './ThePokemonImage.vue'
import Speedometer from './Speedometer.vue'
import BarChart from './BarChart.vue'
import NumPlayers from './NumPlayers.vue'
import ViabilityCeiling from './ViabilityCeiling.vue'
import json from '../data/gen8ou-1825.json'

const pokemons = json.data
const pokemon_array = Object.keys(pokemons)
const index=173;
const pokemon_name = pokemon_array[index].toLowerCase()
const current_pokemon = pokemons[pokemon_array[index]]
</script>

<template>
    <div class="chart-container">
        <ThePokemonImage :pokemon_name="pokemon_name"/>
        <Speedometer :usage="current_pokemon.usage"/>
        <NumPlayers 
            :numPlayers="current_pokemon['Viability Ceiling'][0]"
            :name="pokemon_array[index]"/>
        <ViabilityCeiling 
            :name="pokemon_array[index]"
            :best="current_pokemon['Viability Ceiling'][1]"
            :top1="current_pokemon['Viability Ceiling'][2]"
            :top5="current_pokemon['Viability Ceiling'][3]"/>
        <BarChart :data="current_pokemon['Moves']" title="Moves"/>
        <BarChart :data="current_pokemon['Teammates']" title="Teammates"/>
        <BarChart :data="current_pokemon['Items']" title="Items"/>
        <BarChart :data="current_pokemon['Abilities']" title="Abilities"/>
        <BarChart :data="current_pokemon['Spreads']" title="Spreads"/>
        <!-- <div class="chart"><div v-for="(value, key) in pokemon_array">{{key}}.- {{value}}</div></div> -->
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
</style>
