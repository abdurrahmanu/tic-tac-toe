<template>
    <Teleport to="#modals">
            <div ref="sidebarEl" v-if="gameStore.toggleSideBar" class="w-[200px] shadow-md shadow-gray-600 sm:hidden z-40 h-[100%] bg-slate-100 fixed left-0 top-0">
                <div class="p-10 relative">
                    <exitSvg @click="gameStore.toggleSideBar = false" class="active:bg-red-500 hover:bg-red-300 rounded-full" />
                </div>
                <div class="p-2 text-center hover:bg-slate-300 transition-all duration-500 text-gray-700 text-2xl font-bold py-4" v-for="(option, index) in gameStore.options" :key="index">
                    <div @click="gameStore.toggleModal = false" >
                        <div>
                            {{ option }}
                        </div>
                    </div>
                </div>
            </div>
    </Teleport>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useGameStore } from '../stores/GameStore';
import exitSvg from './svgs/exitSvg.vue'
import {useClickOutside} from '../stores/clickOutside'

const sidebarEl = ref(null)
const gameStore = useGameStore()
const toggle = ref(false)

watchEffect(() => {
    if (gameStore.toggleSideBar) {
        setTimeout(() => {
            toggle.value = true
        }, 0);
    } else {
        toggle.value = false
    }
})

onMounted(() => {
    window.addEventListener('click', e => {    
        if (toggle.value) {      
            if (useClickOutside(sidebarEl.value, e)) {
                    gameStore.toggleSideBar = false
                }
        }                    
        })
})

</script>






