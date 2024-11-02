<template>
    <div 
    :id="index"
    @click="playerOne && !winIndexes.length && !openModal ? play($event) : ''"
    :class="[ winIndex ? 'bg-green-500' : 'bg-neutral-900']"
    class="shadow-md shadow-black transition-all duration-[.5s] text-gray-700 grid place-content-center text-[80px] caveat"></div>
</template>

<script setup>
import { watch } from 'vue';
import { useGameStore } from '../stores/GameStore';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore()
const {winIndexes, playerOne, openModal} = storeToRefs(gameStore)
const {play} = gameStore

const props = defineProps({
    index: Number,
    winIndex: Boolean,
})
</script>