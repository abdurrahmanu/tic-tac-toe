<template>
    <div class="">
        <div class="md:w-full md:h-full md:grid md:place-content-center relative z-30">
            <div :class="{'gap-3': gameStore.isDarkMode}"  class="grid grid-cols-3 grid-rows-3 xs  md:w-[400px] md:h-[400px] w-[300px] min-w-[150px] h-[300px] justify-center m-auto">
                <boxComponent
                v-for="index in numberOfBoxes" 
                :key="index" :index="index" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';
import boxComponent from './boxComponent.vue'

const numberOfBoxes = 9
const gameStore = useGameStore()
</script>

<style>
</style>



