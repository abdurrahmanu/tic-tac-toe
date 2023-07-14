<template>
    <Teleport to="#modals">
        <div v-if="gameStore.toggleModal" class="fixed w-full h-screen z-40 bg-black top-0 left-0 opacity-75">
        </div>
            <div v-if="gameStore.toggleModal" :class="{'bg-teal-800 text-white' : gameStore.isDarkMode}" class="absolute left-[50%] top-[50%] border-[10px] border-teal-500 bg-green-300 justify-center place-content-center grid translate-x-[-50%] translate-y-[-50%] p-9 rounded-tl-[40px] rounded-br-[40px] bg-gray z-40">
                <p class="text-center py-4 text-xs font-bold">PLAYER ONE MARK</p>
                <div class="flex justify-center gap-4 ">
                    <div @click="gameStore.setPlayerOneAlphabet('X')" class="p-5 text-black active:shadow-none bg-white shadow-black shadow-lg text-3xl hover:bg-green-200 hover:text-black rounded-full transition-all duration-100">X</div>
                    <div @click="gameStore.setPlayerOneAlphabet('O')" class="p-5 text-black active:shadow-none bg-white shadow-black shadow-lg text-3xl hover:bg-green-200 hover:text-black rounded-full transition-all duration-100">O</div>
                </div>
            </div>
    </Teleport>
</template>

<script setup>
import { watchEffect } from 'vue';
import { useGameStore } from '../stores/GameStore';

const gameStore = useGameStore()

watchEffect(() => {
    if (gameStore.toggleModal) {
        window.scroll(0, 0)
    }
})



</script>