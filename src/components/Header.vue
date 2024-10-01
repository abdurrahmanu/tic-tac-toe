<template>
    <div class="pt-3 m-auto font-mono text-slate-400 w-fit">
        <div class="flex text-sm text-center border bg-neutral-600 border-neutral-700 whitespace-nowrap rounded-3xl">
            <p @click="vsPC = false" :class="[vsPC ? 'border-transparent' : 'border-green-500 text-green-400']" class="p-4 py-1 rounded-l-3xl border hover:bg-neutral-900">PLAYER</p>
            <p @click="vsPC = true" :class="[vsPC ? 'border-green-500 text-green-400' : 'border-transparent']" class="p-4 rounded-r-3xl border hover:bg-neutral-900 py-1">PC</p>
        </div>
        <div v-if="!playerOneAlphabet" class="flex items-center m-auto w-fit py-2">       
            <div class="flex justify-center gap-2 items-center">
                <div @click="setPlayerOneAlphabet('X')" class="p-4 flex items-center justify-center border border-neutral-700 hover:bg-neutral-900 h-6 w-6 rounded-full hover:border-green-500 hover:text-green-400">X</div>
                <div class="border h-10 border-slate-500 rotate-[15deg]"></div>
                <div @click="setPlayerOneAlphabet('O')" class="p-4 flex items-center justify-center border border-neutral-700 hover:bg-neutral-900 h-6 w-6 rounded-full hover:border-green-500 hover:text-green-400">O</div>
            </div>
        </div>
        <div v-else class="flex justify-center gap-4 items-center text-slate-400 py-2">
            <div class="flex items-center gap-2">
                <div class="font-mono text-3xl">{{ playerOneAlphabet }}</div>
                <div class="p-4 flex items-center justify-center border border-neutral-700 hover:bg-neutral-900 h-6 w-6 font-mono text-white text-lg">{{ playerOneWins }}</div>
            </div>
            <div class="border h-10 border-slate-500 rotate-[15deg]"></div>
            <div class="flex items-center gap-2">
                <div class="p-4 flex items-center justify-center border border-neutral-700 hover:bg-neutral-900 h-6 w-6 font-mono text-white text-lg">{{ playerTwoWins }}</div>
                <div class="font-mono text-3xl">{{ vsPC ? computerAlphabet : playerTwoAlphabet }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useGameStore } from '../stores/GameStore';
import { storeToRefs } from 'pinia';

const selectedGameType = ref(false)

const gameStore = useGameStore()
const {playerOneAlphabet, playerTwoAlphabet, computerAlphabet, playerOneWins, playerTwoWins, vsPC} = storeToRefs(gameStore)
const {setPlayerOneAlphabet, clearAndRestart} = gameStore

watch(vsPC, (newVal) => {
    playerOneAlphabet.value = ''
    selectedGameType.value = true
    clearAndRestart()
})
</script>