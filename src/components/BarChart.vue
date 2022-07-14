<script setup>
import { scaleBand, scaleLinear, max } from "d3";
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
});

const keysSorted = Object.keys(props.data).sort(function(a,b) {
    return props.data[b]-props.data[a]
})

const width=450;
const height= keysSorted.length*24;

const yScale = scaleBand()
    .domain(keysSorted)
    .range([0, 2*height]);

const xScale = scaleLinear()
    .domain([0, max(keysSorted, d => props.data[d])])
    .range([0, width]);
</script>

<template>
    <svg class="center" :width="width" :height="2*height">
        <g v-for="(value, key) in data" :transform="'translate(0,'+ (yScale(key)+24) + ')'">
            <text y="-2">{{key}}</text>
            <rect
                :width="xScale(value)"
                :height="yScale.bandwidth()/2"/>
        </g>
    </svg>
</template>

<style scoped>
svg text {
    font-size: 1rem;
    font-weight: bold;
}
</style>
