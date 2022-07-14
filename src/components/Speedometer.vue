<script setup>
import { arc } from "d3";

const props = defineProps({
  usage: {
    type: Number,
    required: true
  },
});

function percentage_to_angle(percentage) {
    return percentage * Math.PI - Math.PI/2;
}

const radius = 150;
const thickness = 30;
const backgroundArc = arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius)
    .startAngle(- Math.PI/2)
    .endAngle(Math.PI/2);

const mainArc = arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius)
    .startAngle(- Math.PI/2)
    .endAngle(percentage_to_angle(props.usage));
</script>

<template>
    <svg class="center" :width="2*radius" :height="radius">
        <g :transform="'translate(' + radius + ',' + radius+ ')'">
            <path class="arc-background" :d="backgroundArc()"/>
            <path class="arc-main" :d="mainArc()"/>
            <text y="-1" text-anchor="middle">{{(usage*100).toFixed(2)}}%</text>
        </g>
    </svg>
</template>

<style>
.center {
    justify-self: center;
    align-self: center;
}

svg .arc-background {
    fill: var(--vt-c-white-mute);
}

svg .arc-main {
    fill: black;
}

svg text {
    font-size: 3.5rem;
    font-weight: bold;
}

</style>
