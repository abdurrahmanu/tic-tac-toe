<template>
    <div 
    :id="index"
    @click="play($event)"
    :class="[!winnerCombination.length ? 'hover:bg-neutral-800' : '', winIndex ? 'bg-green-500' : '']"
    class="border border-zinc-700 shadow-md shadow-black hover:shadow-sm transition-all duration-[.5s] hover:text-[75px] text-gray-700 grid place-content-center text-[80px] bg-neutral-900 rounded-md caveat"></div>
</template>

<script setup>
import { watch } from 'vue';
import { useGameStore } from '../stores/GameStore';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore()
const {winnerCombination, playerOneAlphabet} = storeToRefs(gameStore)
const {play} = gameStore

const props = defineProps({
    index: Number,
    winIndex: Boolean,
})
</script>