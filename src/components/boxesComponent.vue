<template>
        <div  class="relative z-30 pt-4 md:w-full md:h-full md:grid md:place-content-center">
            <div ref="boxes" :class="{'gap-3': gameStore.isDarkMode}"  class="grid grid-cols-3 grid-rows-3 xs  md:w-[400px] md:h-[400px] w-[300px] min-w-[150px] h-[300px] justify-center m-auto">
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
import { onMounted, ref, watch } from 'vue';

const boxes = ref([])

const gameStore = useGameStore()
const {playHasStarted, playerOneWins, currentPlayer, playerTwoWins, drawTies, computerBoxChoice, computerAlphabet, vsComputer} = storeToRefs(gameStore)
const {resetAndRestart, clearAndRestart} = gameStore

onMounted(() => {
    watch(computerBoxChoice, (newVal) => {
        console.log(newVal);
        if (vsComputer.value && computerAlphabet.value && boxes.value instanceof HTMLDivElement) {      
            setTimeout(() => {        
                Array.from(boxes.value.children)[newVal].innerText = computerAlphabet.value
            }, 100);
        }
    })
})
</script>





