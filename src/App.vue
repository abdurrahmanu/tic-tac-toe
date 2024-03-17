<script setup>
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue';
import MainComponent from './components/mainComponent.vue';
import { useGameStore } from './stores/GameStore';

const gameStore = useGameStore()

watchEffect(() => {
  localStorage.setItem('bgMode', gameStore.isDarkMode)
})

onBeforeMount(() => {
  if (localStorage.getItem('bgMode') === 'true') {
    console.log(true);
    gameStore.isDarkMode = true
  } else if (localStorage.getItem('bgMode') === 'false') {
    console.log(false);
    gameStore.isDarkMode = false
  }
})
</script>

<template>
  <MainComponent />
</template>

<style scoped>
</style>
