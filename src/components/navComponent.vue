<template>
    <nav class="bg-teal-700 text-base justify-center text-white sm:flex hidden md:shadow-md md:shadow-gray-900" >
        <div class="px-4 text-center py-1 hover:bg-teal-300 hover:text-black font-mono rounded-t-md" v-for="(option, index) in gameStore.options" :key="index">
            <router-link :to="{name: option.toLowerCase()}">
                {{ option }}
            </router-link> 
        </div>
    </nav>
</template>

<script setup>
import { useGameStore } from '../stores/GameStore';
const gameStore = useGameStore()
</script>
