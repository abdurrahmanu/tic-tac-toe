<template>
    <div class="pt-2 m-auto space-y-2 font-mono text-white w-fit">
        <div class="flex text-sm text-center border bg-neutral-600 border-neutral-700 whitespace-nowrap">
            <p @click="vsComputer = false, selectedGameType = true" :class="[vsComputer ? 'bg-transparent hover:bg-neutral-800' : 'bg-neutral-900']" class="p-4">PLAYER 1 VS PLAYER 2</p>
            <p @click="vsComputer = true, selectedGameType = true" :class="[vsComputer ? 'bg-neutral-900' : 'hover:bg-neutral-800']" class="p-4">PLAYER 1 VS COMPUTER</p>
        </div>
        <div v-if="!playerOneAlphabet" class="flex items-center m-auto border w-fit border-neutral-700">       
            <p class="p-2 px-2 font-sans text-xs text-center">PLAYER ONE MARK</p>
            <div class="flex justify-center">
                <div @click="setPlayerOneAlphabet('X')" class="px-2 py-2 text-xl text-white border border-neutral-700 hover:bg-neutral-900">X</div>
                <div @click="setPlayerOneAlphabet('O')" class="px-2 py-2 text-xl text-white border border-neutral-700 hover:bg-neutral-900">O</div>
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
const {vsComputer, playerOneAlphabet} = storeToRefs(gameStore)
const {setPlayerOneAlphabet, clearAndRestart} = gameStore

watch(vsComputer, (newVal) => {
    playerOneAlphabet.value = ''
    clearAndRestart()
})
</script>