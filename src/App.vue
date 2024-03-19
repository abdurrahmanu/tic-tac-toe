<template>
<div class="min-h-screen m-auto bg-neutral-800 max-w-[900px]">
    <GameType />
    <Scores />
    <boxesComponent />
  </div>
</template>

<script setup>
import Scores from './components/Scores.vue';
import boxesComponent from './components/boxesComponent.vue';
import GameType from './components/GameType.vue';
</script>