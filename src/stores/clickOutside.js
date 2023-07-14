import { onMounted } from 'vue'
import { useGameStore } from './GameStore';

export function useClickOutside(el, event) {
    if (el) {
        if (event.target === el || el.contains(event.target)) return false
        return true
    }
}


