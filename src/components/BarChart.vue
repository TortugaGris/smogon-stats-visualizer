<script setup>
import { scaleBand, scaleLinear } from "d3";
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  title: {
    type: String
  }
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
    .domain([0, 100])
    .range([0, width]);

const total = keysSorted.reduce((partialSum, key) => partialSum + props.data[key], 0);
</script>

<template>
    <div class="chart">
        <h2>{{title}}</h2>
        <svg class="center" :width="width" :height="2*height">
            <g v-for="(value, key) in data" :transform="'translate(0,'+ (yScale(key)+24) + ')'">
                <text class="name" y="-2">{{key}}</text>
                <rect
                    :width="xScale(100*value/total)"
                    :height="yScale.bandwidth()/2"/>
                <text v-if="xScale(100*value/total)>50" fill="white" :x="xScale(100*value/total)-1" y="19" text-anchor="end">{{(100*value/total).toFixed(2)}}%</text>
                <text v-else fill="black" :x="xScale(100*value/total)+1" y="19" text-anchor="start">{{(100*value/total).toFixed(2)}}%</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
svg .name {
    font-size: 1rem;
    font-weight: bold;
}
.chart {
    overflow: auto;
    padding: 1rem;
}

.chart h2{
    margin-bottom: 0.1rem; 
}
</style>
