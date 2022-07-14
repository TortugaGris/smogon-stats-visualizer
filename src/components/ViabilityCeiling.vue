<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  best: {
    type: Number,
    required: true
  },
  top1: {
    type: Number,
    required: true
  },
  top5: {
    type: Number,
    required: true
  }
});
</script>

<template>
    <div class="chart-viability">
        <h2>Viability Ceiling</h2>
        <p>The <b>Best</b> {{name}} player has a GXE of 
        <b>{{best}}</b></p>
        <p> To be on the <b>Top 1%</b> of {{name}} players you need
        a GXE of <b>{{top1}}</b></p>
        <p> To be on the <b>Top 5%</b> of {{name}} players you need
        a GXE of <b>{{top5}}</b></p>
    </div>
</template>

<style scoped>
.chart-viability {
    padding: 1rem;
}

.chart-viability p {
    margin: 0.5rem 0;
    font-size: 1.25rem;
}

.chart-viability h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}

.chart-viability b {
    font-weight: bold;
}
</style>
