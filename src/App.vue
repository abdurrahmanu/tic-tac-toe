<script setup>
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue';
import HomeView from './views/HomeView.vue';
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
  <HomeView />
</template>

<style scoped>
</style>
