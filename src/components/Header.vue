<template>
    <div class="pt-3 m-auto font-mono text-black w-fit">
        <div class="flex text-sm text-center shadow-sm shadow-black bg-neutral-500 whitespace-nowrap rounded-3xl w-fit m-auto">
            <p @click="vsPC = false" :class="[vsPC ? 'border-transparent text-white' : 'border-green-500 bg-neutral-700 text-green-400']" class="p-4 py-1 rounded-l-3xl border hover:bg-neutral-700 flex items-center gap-1 cursor-default">
                <img class="w-5 h-5" src="/avatar.svg" alt="">
                <span class="text-slate-400">vs</span>
                <img class="w-5 h-5" src="/avatar.svg" alt="">
            </p>
            <p @click="vsPC = true" :class="[vsPC ? 'border-green-500 bg-neutral-700 text-green-400' : 'border-transparent text-white']" class="p-4 rounded-r-3xl border hover:bg-neutral-700 py-1 flex items-center gap-1 cursor-default">
                <img class="w-5 h-5 mr-[2px]" src="/keyboard.svg" alt="">
                <span class="text-slate-400">vs</span>
                <img class="w-5 h-5" src="/avatar.svg" alt="">
            </p>
        </div>
        <div v-if="!playerOne" class="flex items-center m-auto w-fit py-2">       
            <div class="flex justify-center gap-2 items-center">
                <div @click="setSymbol('X')" class="p-4 flex items-center justify-center border border-black hover:bg-neutral-900 h-6 w-6 rounded-full hover:border-green-500 hover:text-green-400 animate-pulse cursor-pointer">X</div>
                <div class="border h-10 border-black rotate-[15deg]"></div>
                <div @click="setSymbol('O')" class="p-4 flex items-center justify-center border border-black hover:bg-neutral-900 h-6 w-6 rounded-full hover:border-green-500 hover:text-green-400 animate-pulse cursor-pointer">O</div>
            </div>
        </div>
        <div v-else class="flex justify-center gap-4 items-center text-black py-2">
            <div class="flex items-center gap-2">
                <div class="exo text-3xl font-bold">{{ playerOne }}</div>
                <div class="p-4 flex items-center justify-center border border-neutral-700 hover:bg-neutral-900 h-6 w-6 font-mono text-zinc-400 text-xl">{{ playerOneWins }}</div>
            </div>
            <div class="border h-10 border-black rotate-[15deg]"></div>
            <div class="flex items-center gap-2">
                <div class="p-4 flex items-center justify-center border border-neutral-700 hover:bg-neutral-900 h-6 w-6 font-mono text-zinc-400 text-xl">{{ playerTwoWins }}</div>
                <div class="exo text-3xl font-bold">{{ playerTwo }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useGameStore } from '../stores/GameStore';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore()
const {playerOne, playerTwo, playerOneWins, playerTwoWins, vsPC} = storeToRefs(gameStore)
const {setSymbol, restart} = gameStore

watch(vsPC, (newVal) => {
    playerOne.value = ''
    restart()
})
</script>