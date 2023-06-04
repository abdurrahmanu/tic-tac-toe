<script setup>
import MainComponent from '../components/mainComponent.vue';
import ModalComponent from '../components/modalComponent.vue';
import { useGameStore } from '../stores/GameStore';

const gameStore = useGameStore()
</script>

<template>
    <MainComponent />
    <ModalComponent/>
</template>



