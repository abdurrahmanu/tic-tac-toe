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
            <div  v-if="start || playerOneWins || playerTwoWins || drawTies" class="text-center text-sm space-x-1 py-4 flex">
                <button class="p-1 px-12 text-white bg-yellow-800 hover:bg-yellow-600 rounded-l-full exo" @click="undoMove()" type="">UNDO</button>
                <div class="relative">
                    <div class="text-center absolute bottom-[50px] left-[50%] translate-x-[-50%] rounded-md bg-red-400 p-2 shadow-sm shadow-black exo text-sm space-y-2 after:bg-red-700 after:z-[99999999] after:h-4 after-w-10 after:absolute after:top-[100%] after:left-[50%] after:translate-x-[-50%] after:border-r-0 after:border-l-0 after:border-t-1" v-if="openModal">
                        <p>RESET THIS GAME</p>
                        <div class="flex text-center">
                            <p @click="restart(true)" class="px-10 py-2 border-[1px] hover:bg-green-500 border-red-900">YES</p>
                            <p @click="restart(false)" class="px-10 py-2 border-l-0 border-[1px] hover:bg-red-500 border-red-900">NO</p>
                        </div>
                    </div>                    
                    <button class="p-1 px-12 text-white bg-red-800 hover:bg-red-500 exo" @click="openModal = true" type="">RESET</button>
                </div>
                <button class="p-1 px-12 text-white bg-green-900 hover:bg-green-600 rounded-r-full exo" @click="reset()" type="">NEXT</button>
            </div>
        </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '../stores/GameStore';
import boxComponent from './boxComponent.vue'

const gameStore = useGameStore()
const {start, playerOneWins, winIndexes, openModal, boxesID, playerTwoWins, drawTies, squares} = storeToRefs(gameStore)
const {reset, restart, undoMove} = gameStore
</script>
