<template>
    <div 
    :id="index"
    @click="gameStore.play($event)"
    :class="{'bg-gray-300 rounded-md': gameStore.isDarkMode, 
    'hover:bg-white' : !gameStore.winnerCombination.length,
    'bg-green-300 text-black' : gameStore.winnerCombination.length && gameStore.winnerCombination.includes(index)}"
    class="border border-black transition-all duration-[10ms] hover:text-[75px] text-gray-700 grid place-content-center text-[80px] font-mono"></div>
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';

const gameStore = useGameStore()
const props = defineProps({
    index: Number
})
</script>