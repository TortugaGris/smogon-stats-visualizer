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
        <div class="chart-usage">
            <Speedometer :usage="current_pokemon.usage"/>
            <h2>Usage</h2>
        </div>
        <div class="chart-player-num">
            <h2>Number of players using {{pokemon_array[index]}}</h2>
            <p>{{current_pokemon['Viability Ceiling'][0]}}</p>
        </div>
        <div class="chart-viability">
            <h2>Viability Ceiling</h2>
            <p>The <b>Best</b> {{pokemon_array[index]}} player has a GXE of 
            <b>{{current_pokemon['Viability Ceiling'][1]}}</b></p>
            <p> To be on the <b>Top 1%</b> of {{pokemon_array[index]}} players you need
            a GXE of <b>{{current_pokemon['Viability Ceiling'][2]}}</b></p>
            <p> To be on the <b>Top 5%</b> of {{pokemon_array[index]}} players you need
            a GXE of <b>{{current_pokemon['Viability Ceiling'][3]}}</b></p>
        </div>
        <div class="chart">
            <h2>Moves</h2>
            <BarChart :data="current_pokemon['Moves']"/>
        </div>
        <div class="chart">
            <h2>Abilities</h2>
            <BarChart :data="current_pokemon['Abilities']"/>
        </div>
        <div class="chart">
            <h2>Teammates</h2>
            <BarChart :data="current_pokemon['Teammates']"/>
        </div>
        <div class="chart">
            <h2>Items</h2>
            <BarChart :data="current_pokemon['Items']"/>
        </div>
        <div class="chart">
            <h2>Spreads</h2>
            <BarChart :data="current_pokemon['Spreads']"/>
        </div>
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
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    padding: 1rem;
}

.chart-container .chart h2{
    margin-bottom: 0.1rem; 
}

.chart-container .chart-usage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.chart-container .chart-usage h2 {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 5px;
}

.chart-container .chart-viability, 
.chart-container .chart-player-num {
    padding: 1rem;
}

.chart-container .chart-viability p {
    margin: 0.5rem 0;
    font-size: 1.25rem;
}

.chart-container .chart-viability h2,
.chart-container .chart-player-num h2 {
    font-size: 1.5rem;
    font-weight: bold;
}

.chart-container .chart-viability b {
    font-weight: bold;
}

.chart-container .chart-player-num {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.chart-container .chart-player-num p {
    font-size: 4rem;
    font-weight: bold;
}
</style>
