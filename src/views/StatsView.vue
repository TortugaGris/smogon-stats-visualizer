<script setup>
//import TheWelcome from '@/components/TheWelcome.vue'
import TheStats from '@/components/TheStats.vue'
</script>

<template>
  <main>
    <TheStats />
  </main>
</template>

<style>
main {
  width: 100vw - var(--navbar-size);
  height: 100vh;
  padding: 1rem;
}
</style>
