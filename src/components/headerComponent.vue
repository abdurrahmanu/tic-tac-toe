<template>
        <div :class="[gameStore.isDarkMode ? 'text-black' : 'text-white']" class="text-[50px] w-full font-black flex gap-4 place-content-center bg-teal-800 font-mono text-center border-black h-24 p-4 m-auto relative">        
                <nightSvg @click="gameStore.isDarkMode = !gameStore.isDarkMode" />
                <moreSvg class="sm:hidden" @click="gameStore.toggleSideBar = true" />
                <sideBar />
                <span v-for="word in heading" class="rotate-6 hover:rotate-0">
                <span class="hover:text-gray-400" >{{ word }}</span>
                </span>
        </div>
        <navComponent/>
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';
import moreSvg from '../components/svgs/moreSvg.vue'
import nightSvg from '../components/svgs/nightSvg.vue'
import sideBar from './sideBarComponent.vue'
import navComponent from './navComponent.vue';

const gameStore = useGameStore()
const heading = ['TIC', 'TAC', 'TOE']
</script>