<script setup>
defineProps({
  pokemon_name: {
    type: String,
    required: true
  },
})
</script>

<template>
    <span class="pokesprite pokemon-gen8 profile" :class="pokemon_name"></span>
</template>

<style>
.profile {
    --pixel-size: 5;
    justify-self: center;
}
</style>
