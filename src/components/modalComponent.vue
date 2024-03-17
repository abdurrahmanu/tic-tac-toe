<template>
        <div v-if="gameStore.selectPlayerAlphabet" :class="{'bg-teal-800 text-white' : gameStore.isDarkMode}" class="absolute left-[50%] top-[50%] border-[10px] border-teal-500 bg-green-300 justify-center place-content-center grid translate-x-[-50%] translate-y-[-50%] p-9 rounded-tl-[40px] rounded-br-[40px] bg-gray z-40">
            <p class="py-4 text-xs font-bold text-center">PLAYER ONE MARK</p>
            <div class="flex justify-center gap-4 ">
                <div @click="gameStore.setPlayerOneAlphabet('X')" class="p-5 text-3xl text-black transition-all duration-100 bg-white rounded-full shadow-lg active:shadow-none shadow-black hover:bg-green-200 hover:text-black">X</div>
                <div @click="gameStore.setPlayerOneAlphabet('O')" class="p-5 text-3xl text-black transition-all duration-100 bg-white rounded-full shadow-lg active:shadow-none shadow-black hover:bg-green-200 hover:text-black">O</div>
            </div>
        </div>
</template>

<script setup>
import { watchEffect } from 'vue';
import { useGameStore } from '../stores/GameStore';

const gameStore = useGameStore()

watchEffect(() => {
    if (gameStore.selectPlayerAlphabet) {
        window.scroll(0, 0)
    }
})



</script>