<template>
    <div 
    :id="index"
    @click="play($event)"
    :class="{'hover:bg-white' : !winnerCombination.length && playerOneAlphabet, 
    'bg-green-300 text-black' : winnerCombination.length && winnerCombination.includes(index)}"
    class="border border-black transition-all duration-[10ms] hover:text-[75px] text-gray-700 grid place-content-center text-[80px] font-mono bg-slate-300 rounded-md"></div>
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore()
const {winnerCombination, playerOneAlphabet} = storeToRefs(gameStore)
const {play} = gameStore

const props = defineProps({
    index: Number
})
</script>