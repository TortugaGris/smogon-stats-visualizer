<script setup>
defineProps({
  numPlayers: {
    type: Number,
    required: true
  },
  name: {
    type: String
  }
});
</script>
<template>
    <div class="chart-player-num">
        <h2>Number of players using <br>{{name}}</h2>
        <p>{{numPlayers}}</p>
    </div>
</template>

<style scoped>
.chart-player-num {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.chart-player-num h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}

.chart-player-num p {
    font-size: 4rem;
    font-weight: bold;
}
</style>
