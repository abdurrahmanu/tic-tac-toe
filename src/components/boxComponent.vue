<template>
    <div 
    :id="index"
    @click="play($event)"
    :class="{'hover:bg-neutral-800' : !winnerCombination.length && playerOneAlphabet, 
    'bg-green-300 text-black' : winnerCombination.length && winnerCombination.includes(index)}"
    class="border border-zinc-700 shadow-sm shadow-black hover:shadow-none transition-all duration-[10ms] hover:text-[75px] text-gray-700 grid place-content-center text-[80px] bg-neutral-900 rounded-md caveat"></div>
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