<template>
    <div :class="{'md:shadow-blue-200': !gameStore.isDarkMode}"  class="flex justify-center rounded-md md:shadow-xl text-2xl md:hover:shadow-sm text-gray-500 font-black gap-16 p-6 md:flex-col md:w-[40%] md:justify-center">
        <div class="px-2">
            <div :class="{'text-white': gameStore.isDarkMode}" class="h-fit text-center text-black text-3xl font-semibold rounded-full">
                {{ gameStore.playerOneAlphabet }}
            </div>
            <div class="flex items-center">
                <p :class="{'text-white': gameStore.isDarkMode}"  class="p-3 text-center">PLAYER 1</p>
                <div :class="{'bg-white': gameStore.isDarkMode}" class="px-3 h-fit rounded-md font-normal border text-center shadow-lg border-black">{{ gameStore.playerOneWins }}</div>
            </div>
        </div>
        <div class="px-2">
            <div :class="{'text-white': gameStore.isDarkMode}" class="h-fit text-center text-black font-semibold rounded-full text-3xl">
                {{ gameStore.playerOneAlphabet == 'X' ? 'O' : gameStore.playerOneAlphabet === 'O' ? 'X' : '' }}
            </div>
            <div class="flex items-center">
                <p :class="{'text-white': gameStore.isDarkMode}"  class="p-3 text-center"> PLAYER 2 </p>
                <div :class="{'bg-white': gameStore.isDarkMode}"  class="px-3 font-normal rounded-md border text-center shadow-lg border-black h-fit">{{ gameStore.playerTwoWins }}</div>
            </div>
        </div>
    </div>   
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';
const gameStore = useGameStore()
</script>