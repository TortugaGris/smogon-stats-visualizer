<script setup>
import WelcomeItem from './WelcomeItem.vue'
import { ref, reactive } from 'vue'
import json from '../data/tiers.json'

const tiers = json
const tier_name = reactive({
    i: 0,
    index: Object.keys(tiers)
})
const selectedPokemon = ref("")

function moveTierRight() {
    if (tier_name.i < (tier_name.index.length - 1)) {
        tier_name.i++;
    } else {
        tier_name.i = 0;
    }
}

function moveTierLeft() {
    if (tier_name.i > 0) {
        tier_name.i--;
    } else {
        tier_name.i = (tier_name.index.length - 1);
    }
}
</script>

<template>
  <div class="box">
    <h2 class="box-title">
        <i @click="moveTierLeft" class="arrow left"></i>
        {{ tier_name.index[tier_name.i] }}
        <i @click="moveTierRight" class="arrow right"></i>
    </h2>
    <WelcomeItem 
        v-for="pokemon in tiers[tier_name.index[tier_name.i]]" 
        :pokemon="pokemon"
        :isClicked="pokemon === selectedPokemon"
        @click="selectedPokemon = pokemon"/>
  </div>
</template>

<style>
@import '@/assets/pokesprite-pokemon-gen8.css';
.box {
    max-width: calc(72px * 6 * var(--pixel-size));
    margin: 0 auto;
}

.box-title {
    display: flex;
    width: 18rem;
    height: 3rem;
    background-color: var(--color-background-soft);
    text-align: center;
    margin: 0 auto;
    border-radius: 1.25rem;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    user-select: none;
}
.arrow {
  border: solid var(--color-heading);
  border-width: 0 0.25rem 0.25rem 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
     
</style>
