<template>
        <div class="relative z-30 md:w-full md:h-full md:grid md:place-content-center">
            <div :class="{'gap-3': gameStore.isDarkMode}"  class="grid grid-cols-3 grid-rows-3 xs  md:w-[400px] md:h-[400px] w-[300px] min-w-[150px] h-[300px] justify-center m-auto">
                <boxComponent
                v-for="index in numberOfBoxes" 
                :key="index" :index="index" />
            </div>
            <div class="py-1 text-center">
                <button class="p-2 px-6 m-3 text-white bg-green-700 rounded-full" @click="gameStore.resetAndRestart()" type="">NEXT</button>
                <button class="p-2 px-6 m-3 text-white bg-green-700 rounded-full" @click="gameStore.clearAndRestart()" type="">RESET</button>
            </div>
        </div>
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';
import boxComponent from './boxComponent.vue'

const numberOfBoxes = 9
const gameStore = useGameStore()
</script>





