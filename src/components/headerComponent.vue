<template>
        <div :class="[gameStore.isDarkMode ? 'text-black' : 'text-white']" class="text-[35px] py-1 w-full font-black flex gap-4 place-content-center bg-teal-800 font-mono text-center border-black m-auto relative">        
                <div @click="gameStore.isDarkMode = !gameStore.isDarkMode" class="w-5 h-5"></div>
                <span v-for="word in heading" class="rotate-6 hover:rotate-0">
                <span class="hover:text-gray-400" >{{ word }}</span>
                </span>
        </div>
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';

const gameStore = useGameStore()
const heading = ['TIC', 'TAC', 'TOE']
</script>