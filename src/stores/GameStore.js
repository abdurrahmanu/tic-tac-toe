import { ref } from 'vue';
import { defineStore } from 'pinia'
import { toNumber } from '@vue/shared';

export const useGameStore = defineStore('gameStore', () => {
  const turn  = ref('')
  const start = ref(false)
  const squares = ref(null)
  const boxesID = ref([])
  const playerOne = ref('')
  const playerTwo  = ref('')
  const playerOneIndexes  = ref([])
  const playerTwoIndexes  = ref([])
  const chooseSymbol = ref(true)
  const winIndexes  = ref([])
  const drawTies = ref(0)
  const playerOneWins = ref(0)
  const playerTwoWins = ref(0)
  const vsPC = ref(false)
  
  const winCombo = ref([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ])

  function play(e) {
    if (boxesID.value.includes(e.target.id)) return
    if (!start.value) start.value = true;
    boxesID.value.push(e.target.id)

    if (turn.value === playerOne.value) {
      e.target.innerText = playerOne.value;
      turn.value = playerTwo.value;
      playerOneIndexes.value.push(toNumber(e.target.id));
      if (playerOneIndexes.value.length > 2) checkWin(1);
    } 
    else {
      e.target.innerText = playerTwo.value;
      turn.value = playerOne.value;
      playerTwoIndexes.value.push(toNumber(e.target.id));
      if (playerTwoIndexes.value.length > 2) checkWin(2);
    }
  }

  function setSymbol(symbol) {
    symbol === 'X' ? playerTwo.value = 'O' : playerTwo.value = 'X'  
    playerOne.value = symbol;
    chooseSymbol.value = false;  
    turn.value = playerOne.value;
  }

  function checkWin(player) {
    if (player === 1) {
      winIndexes.value = winCombo.value.find(arr =>  arr.every(el => playerOneIndexes.value.includes(el))) || []
      if (winIndexes.value.length) {
        turn.value = playerOne.value
        setTimeout(() => {
          playerOneWins.value++
          reset()
        }, 700)}
      }

    else {
      winIndexes.value = winCombo.value.find(arr =>  arr.every(el => playerTwoIndexes.value.includes(el))) || []
      if (winIndexes.value.length) {
        turn.value = playerTwo.value
        setTimeout(() => {
          playerTwoWins.value++
          reset()
        }, 700);
      }
    }
      
    if ((playerOneIndexes.value.length === 5 || playerTwoIndexes.value.length === 5) && !winIndexes.value.length) {
      setTimeout(() => {
        drawTies.value++
        reset()
      }, 300);
    }
  }
  
  function reset() {
    start.value = false;
    boxesID.value = []
    winIndexes.value = [];
    playerOneIndexes.value = [];
    playerTwoIndexes.value = [];
    Array.from(squares.value.children).forEach(each => each.innerText = '')
  }

  function restart() {
    reset()
    playerOneWins.value = 0
    playerTwoWins.value = 0
  }

  return {
    checkWin,
    restart,
    reset,
    setSymbol,
    play,
    squares,
    playerTwoWins,
    playerOneWins,
    winIndexes,
    turn,
    playerTwoIndexes,
    playerOneIndexes,
    playerTwo,
    playerOne,
    drawTies,
    boxesID,
    start,
    chooseSymbol,
    vsPC,
  }
})



















