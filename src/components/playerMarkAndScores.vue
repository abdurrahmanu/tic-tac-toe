<template>
    <div :class="{'md:shadow-blue-200': !gameStore.isDarkMode}"  class="flex justify-center rounded-md md:shadow-xl text-2xl md:hover:shadow-sm text-gray-500 font-black gap-16 p-6 md:flex-col md:w-[40%] md:justify-center">
        <div class="px-2 md:flex md:gap-2 items-center">
                <div :class="{'text-white': gameStore.isDarkMode}" class="h-fit md:text-4xl text-center text-black text-3xl font-semibold rounded-full min-w-[150px] md:min-w-fit min-h-[40px]">
                    {{ playerOne }}
                </div>
            <div class="flex items-center">
                <p :class="{'text-white': gameStore.isDarkMode}"  class="p-3 text-center lg:text-xl text-base">PLAYER 1</p>
                <div :class="{'bg-white': gameStore.isDarkMode}" class="px-3 h-fit rounded-md font-normal border text-center shadow-lg border-black">{{ gameStore.playerOneWins }}</div>
            </div>
        </div>
        <div class="px-2 md:flex md:gap-2 items-center">
                <div :class="{'text-white': gameStore.isDarkMode}" class="h-fit md:text-4xl text-center text-black font-semibold rounded-full text-3xl min-w-[150px] md:min-w-fit min-h-[40px]">
                    {{ playerTwo }}
                </div>
            <div class="flex items-center">
                <p :class="{'text-white': gameStore.isDarkMode}"  class="p-3 text-center lg:text-xl text-base"> PLAYER 2 </p>
                <div :class="{'bg-white': gameStore.isDarkMode}"  class="px-3 font-normal rounded-md border text-center shadow-lg border-black h-fit">{{ gameStore.playerTwoWins }}</div>
            </div>
        </div>
    </div>   
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useGameStore } from '../stores/GameStore';
const gameStore = useGameStore()

const playerOne = ref('')
const playerTwo = ref('')

watchEffect(() => {
    if (gameStore.playerOneAlphabet) {
        setTimeout(() => {
            playerOne.value = gameStore.playerOneAlphabet
        }, 600);
        setTimeout(() => {
            playerTwo.value = gameStore.playerOneAlphabet == 'X' ? 'O' : gameStore.playerOneAlphabet === 'O' ? 'X' : ''
        }, 1000);
    }
})
</script>

<style>
</style>