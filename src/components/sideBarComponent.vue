<template>
    <Teleport to="#modals">
            <div v-if="gameStore.toggleSideBar" class="w-[200px] shadow-md shadow-gray-600 sm:hidden z-40 h-[100%] bg-slate-100 fixed left-0 top-0">
                <div class="p-10 relative">
                    <exitSvg @click="gameStore.toggleSideBar = false" class="active:bg-red-500 hover:bg-red-300 rounded-full" />
                </div>
                <div class="p-2 text-center hover:bg-slate-300 transition-all duration-500 text-gray-700 text-2xl font-bold py-4" v-for="(option, index) in gameStore.options" :key="index">
                    <div @click="gameStore.toggleModal = false" >
                        <router-link :to="{name: option.toLowerCase()}">
                            {{ option }}
                        </router-link>
                    </div>
                </div>
            </div>
    </Teleport>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useGameStore } from '../stores/GameStore';
import exitSvg from './svgs/exitSvg.vue'

const gameStore = useGameStore()
</script>
