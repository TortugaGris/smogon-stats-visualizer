<script setup>
defineProps({
  pokemon: {
    type: String,
    required: true
  },
  isClicked: Boolean
})
</script>

<template>
  <div class="item" :class="{clicked: isClicked}">
    <span class="pokesprite pokemon-gen8" :class="pokemon">
        <!-- <span class="tooltip">{{ class }}</span> -->
    </span>
  </div>
</template>

<style scoped>

.item .tooltip {
  visibility: hidden;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  text-align: center;
  padding: 5px 0;
  border-style: solid;
  border-radius: 6px;
  border-width: 1px;
  border-color: var(--color-border);
 
  position: absolute;
  z-index: 1; 
  width: 6rem;
  bottom: 75%;
  left: 50%;
  margin-left: -3rem; /* Use half of the width (120/2 = 60), to center the tooltip */
}

.item {
  display: inline-block;
  place-content: center;
  padding-bottom: 0.5rem;
  margin: 3px;
  /*border: 0.2rem solid var(--color-border);*/
  border-radius: 0.75rem;
  background-color: var(--color-background-soft); 
  transition: 200ms ease;
   
}

.item:hover {
  background-color: var(--color-border-hover);
}

.item:hover .tooltip{
  visibility: visible;
}

.clicked {
    background-color: var(--color-text);
}

.clicked:hover {
    background-color: var(--color-text);
}

.item .tooltip::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--color-background-mute) transparent transparent transparent;
}

span {
  display: flex;
  place-items: center;
  place-content: center;
}

/*@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  span {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    background: var(--color-background);
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}*/
</style>
