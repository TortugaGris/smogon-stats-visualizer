<script setup>
request('https://www.smogon.com/stats/2022-05/chaos/gen8ou-0.json')
  .then(data => console.log(data))
</script>

<template>
    <div>
        <div class="nav-bar"> 
        </div>
        <div class="content-container">
            <div class="filter">
            </div>
            <div class="content">
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
                <div class="chart">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
:root {
    --nav-bar-size: 18rem;
}
.nav-bar {
    background-color: black;
    position: fixed;
    width: var(--nav-bar-size);
    height: 100vh;
    z-index: 10;
} 
.content-container {
    background-color: white;
    position: relative;
    display: block;
    height: 100vh;
    width: calc(100vw - var(--nav-bar-size));
    left: var(--nav-bar-size);
}

.content-container .filter {
    background-color: red;
    position: relative;
    height: 3rem;
}

.content-container .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 2fr 1fr;
    height: calc(100vh - 3rem);
}

.content-container .content .chart {
    border: 1px solid black;
    background-color: LightSkyBlue;
}
</style>
