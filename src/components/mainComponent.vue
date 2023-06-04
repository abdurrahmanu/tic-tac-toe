<template>
    <div :class="[gameStore.isDarkMode ? 'bg-slate-950' : '']" class="relative min-h-[100vh]">
        <div :class="[gameStore.isDarkMode ? 'bg-slate-800' : 'bg-slate-100']" class="md:w-[80%] m-auto min-h-[100vh]">
            <HeaderComponent />
            <div class="md:flex items-center md:w-[80%] justify-around m-auto pt-9">
                <playerAlphabetsAndScores />
                <boxesComponent />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';
import playerAlphabetsAndScores from './playerMarkAndScores.vue'
import boxesComponent from './boxesComponent.vue'
import HeaderComponent from '../components/headerComponent.vue';

const gameStore = useGameStore()
</script>
