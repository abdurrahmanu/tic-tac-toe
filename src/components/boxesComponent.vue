<template>
    <div class="">
        <div v-if="!gameStore.playerOneAlphabet" @click="gameStore.toggleModal = true" class="text-sm fixed left-[50%] translate-x-[-50%] rounded-full z-40 w-fit px-10 top-[50%] translate-y-[50%] active:bg-teal-900 text-center bg-teal-600 p-4 m-auto text-white">SELECT MARK</div>
        <div class="md:w-full md:h-full md:grid md:place-content-center relative z-30">
            <div :class="{'gap-3': gameStore.isDarkMode}"  class="grid grid-cols-3 grid-rows-3  md:w-[400px] md:h-[400px] w-[300px] h-[300px] justify-center m-auto">
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



