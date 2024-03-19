<template>
    <div v-if="playerOneAlphabet" class="flex w-full py-1 my-auto text-white">
        <div class="m-auto whitespace-nowrap w-fit">
            <div class="text-center text-white h-fit">{{ playerOneAlphabet }}</div>
            <p class="p-3 text-center">PLAYER 1<span class="px-3 mx-2 text-center border border-white rounded-md h-fit">{{ playerOneWins }}</span></p>
        </div>
        
        <div class="m-auto whitespace-nowrap w-fit">
            <div class="text-center text-white rounded-full h-fit">{{ vsComputer ? computerAlphabet : playerTwoAlphabet }}</div>
            <p class="p-3 text-center">{{ vsComputer ? 'COMPUTER' : 'PLAYER 2' }}<span class="px-3 mx-2 text-center border border-white rounded-md h-fit ">{{ playerTwoWins }}</span> </p>
        </div> 
    </div>   
</template>

<script setup>
import { watch } from 'vue';
import { useGameStore } from '../stores/GameStore';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore()
const {playerOneAlphabet, playerTwoAlphabet, computerAlphabet, playerOneWins, playerTwoWins, vsComputer} = storeToRefs(gameStore)
</script>