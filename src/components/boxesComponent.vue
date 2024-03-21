<template>
        <div  class="relative z-30 pt-4 md:w-full md:h-full md:grid md:place-content-center">
            <div ref="boxesContainer" :class="{'gap-3': gameStore.isDarkMode}"  class="grid grid-cols-3 grid-rows-3 xs  md:w-[400px] md:h-[400px] w-[300px] min-w-[150px] h-[300px] justify-center m-auto">
                <boxComponent
                v-for="index in 9" 
                :key="index" :index="index" />
            </div>
            <div  v-if="playHasStarted || playerOneWins || playerTwoWins || drawTies" class="py-1 text-center">
                <button class="p-2 px-6 m-3 text-white bg-green-700 rounded-full" @click="resetAndRestart()" type="">NEXT</button>
                <button class="p-2 px-6 m-3 text-white bg-green-700 rounded-full" @click="clearAndRestart()" type="">RESET</button>
            </div>
        </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '../stores/GameStore';
import boxComponent from './boxComponent.vue'
import { onMounted, ref, watch, watchEffect } from 'vue';

const boxesContainer = ref([])

const gameStore = useGameStore()
const {playHasStarted, playerOneWins, boxes, playerTwoWins, drawTies, computerChoiceIndex, computerAlphabet, vsComputer} = storeToRefs(gameStore)
const {resetAndRestart, clearAndRestart} = gameStore

onMounted(() => {
    watch(computerChoiceIndex, (newVal) => {
        if (playHasStarted.value && vsComputer.value && boxesContainer.value instanceof HTMLDivElement) {      
            setTimeout(() => {      
                Array.from(boxesContainer.value.children)[newVal].innerText = computerAlphabet.value
            }, 100);
            boxes.value.push(Array.from(boxesContainer.value.children)[newVal])
        }
    })
})
</script>





