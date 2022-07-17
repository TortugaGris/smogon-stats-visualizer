<script setup>
import ThePokemonImage from './ThePokemonImage.vue';
import Speedometer from './Speedometer.vue';
import BarChart from './BarChart.vue';
import NumPlayers from './NumPlayers.vue';
import ViabilityCeiling from './ViabilityCeiling.vue';
import { useRoute } from 'vue-router';
import { usePokemonStore } from '@/stores/pokemons';
import { computed } from 'vue';

const route = useRoute();
const pokemon_data = usePokemonStore();
const pokemon_name = computed(() => pokemon_data.keys.includes(route.params.pokemon) ? (
    route.params.pokemon) : (
    pokemon_data.keys[39]));
const pokemon_image = computed(() => pokemon_name.value.toLowerCase().replace(' ', '-'));
const current_pokemon = computed(() => pokemon_data.pokemons[pokemon_name.value]);
console.log(pokemon_name.value)
</script>

<template>
    <div class="chart-container">
        <ThePokemonImage 
            :pokemon_name="pokemon_image"
            class="grid1"/>
        <Speedometer 
            :usage="current_pokemon.usage"
            class="grid2"/>
        <NumPlayers 
            :numPlayers="current_pokemon['Viability Ceiling'][0]"
            :name="pokemon_name"
            class="grid3"/>
        <ViabilityCeiling 
            :name="pokemon_name"
            :best="current_pokemon['Viability Ceiling'][1]"
            :top1="current_pokemon['Viability Ceiling'][2]"
            :top5="current_pokemon['Viability Ceiling'][3]"
            class="grid4"/>
        <BarChart 
            :data="current_pokemon['Abilities']" 
            title="Abilities"
            class="grid5"/>
        <BarChart 
            :data="current_pokemon['Moves']" 
            title="Moves"
            class="grid6"/>
        <BarChart 
            :data="current_pokemon['Teammates']" 
            title="Teammates"
            class="grid7"/>
        <BarChart 
            :data="current_pokemon['Items']" 
            title="Items"
            class="grid8"/>
        <BarChart 
            :data="current_pokemon['Spreads']" 
            title="Spreads"
            class="grid9"/>
        <!-- <div class="chart"><div v-for="(value, key) in pokemon_array">{{key}}.- {{value}}</div></div> -->
    </div>
</template>

<style>
@import '@/assets/pokesprite-pokemon-gen8.css';
.chart-container {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: 1fr 3fr;
    max-height: 100%;
}

.grid1 {
    grid-column-start: 1;
    grid-column-end: 5;
}

.grid2 {
    grid-column-start: 5;
    grid-column-end: 8;
}

.grid3 {
    grid-column-start: 8;
    grid-column-end: 12;
}

.grid4 {
    grid-column-start: 12;
    grid-column-end: 16;
}

.grid5 {
    grid-column-start: 16;
    grid-column-end: 21;
}

.grid6 {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 6;
}

.grid7 {
    grid-row-start: 2;
    grid-column-start: 6;
    grid-column-end:11;
}

.grid8 {
    grid-row-start: 2;
    grid-column-start: 11;
    grid-column-end: 16;
}

.grid9 {
    grid-row-start: 2;
    grid-column-start: 16;
    grid-column-end: 21;
}
</style>
