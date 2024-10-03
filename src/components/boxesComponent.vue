<template>
        <div  class="relative z-30 pt-4 md:w-full md:h-full md:grid md:place-content-center">
            <div ref="squares" class="grid grid-cols-3 grid-rows-3 gap-3 md:w-[400px] md:h-[400px] w-[300px] min-w-[150px] h-[300px] justify-center m-auto ">
                <boxComponent
                v-for="index in 9"
                :key="index"
                :hasInnerText="boxesID.includes(index)"
                :winIndex="winIndexes.length > 0 && winIndexes.includes(index)"
                :index="index" />
            </div>
            <div  v-if="start || playerOneWins || playerTwoWins || drawTies" class="py-1 text-center text-sm">
                <button class="p-1 px-7 m-3 text-white bg-green-800 hover:bg-green-600 rounded-full exo" @click="reset()" type="">NEXT</button>
                <button class="p-1 px-7 m-3 text-white bg-green-800 hover:bg-green-600 rounded-full exo" @click="restart()" type="">RESET</button>
            </div>
        </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '../stores/GameStore';
import boxComponent from './boxComponent.vue'

const gameStore = useGameStore()
const {start, playerOneWins, winIndexes, boxesID, playerTwoWins, drawTies, squares} = storeToRefs(gameStore)
const {reset, restart} = gameStore
</script>

