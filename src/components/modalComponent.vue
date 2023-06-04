<template>
    <Teleport to="#modals">
        <div v-if="gameStore.toggleModal" class="fixed w-full h-screen z-40 bg-black top-0 left-0 opacity-75">
        </div>
            <div v-if="gameStore.toggleModal" class="absolute left-[50%] top-[50%] border-[10px] border-white bg-green-300 justify-center place-content-center grid translate-x-[-50%] translate-y-[-50%] p-9 rounded-lg bg-gray z-40">
                <p class="text-center py-4 font-bold">SELECT PLAYER ONE MARK</p>
                <div class="flex justify-center gap-4 ">
                    <div @click="gameStore.setPlayerOneAlphabet('X')" class="p-5 bg-white border border-black text-3xl hover:bg-green-200 hover:text-black rounded-md transition-all duration-100">X</div>
                    <div @click="gameStore.setPlayerOneAlphabet('O')" class="p-5 bg-white border text-3xl border-black hover:bg-green-200 hover:text-black rounded-md transition-all duration-100">O</div>
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