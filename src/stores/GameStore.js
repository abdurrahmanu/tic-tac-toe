import { ref, computed } from 'vue';
import { defineStore } from 'pinia'
import { toNumber } from '@vue/shared';

export const useGameStore = defineStore('gameStore', () => {
    const playerOneAlphabet = ref('')
    const boxes = ref([])
    const isDarkMode  = ref(localStorage.getItem('bgMode'))
    const playHasStarted = ref(false)
    const selectPlayerAlphabet = ref(true)
    const playerTwoAlphabet  = ref('')
    const playerOneArray  = ref([])
    const playerTwoArray  = ref([])
    const computerArray = ref([])
    const currentPlayer  = ref('')
    const winnerCombination  = ref([])
    const drawTies = ref(0)
    const playerOneWins = ref(0)
    const playerTwoWins = ref(0)
    const vsComputer = ref(false)
    const computerAlphabet = ref('')
    const computerBoxChoice = ref()
    const computerWins = ref(0)
    
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
      if (!playerOneAlphabet.value) return
      if (winnerCombination.value.length) return;
      if (e.target.innerText) return;

      if (!playHasStarted.value) {
        playHasStarted.value = true;
        localStorage.setItem('playHasStarted.value', true);
      }

      boxes.value.push(e.target)

      if (currentPlayer.value === playerOneAlphabet.value) {
        e.target.innerText = playerOneAlphabet.value;
        if (vsComputer.value) currentPlayer.value = computerAlphabet.value
        else currentPlayer.value = playerTwoAlphabet.value;
        playerOneArray.value.push(toNumber(e.target.id));
        if (playerOneArray.value.length > 2) checkWin(1);
        if (!vsComputer.value) return;
      } 


      if (currentPlayer.value === computerAlphabet.value) {
        let lengthOfOpponentArray = playerOneArray.value.length
        
        if (lengthOfOpponentArray === 1) {
          const boxChoices = ref([])
          if (playerOneArray.value[0] === 5) {
            boxChoices.value = [0, 2, 6, 8]
            let random = Math.round(Math.random() * (boxChoices.value.length - 1))
            computerBoxChoice.value = boxChoices.value[random]
          }
          else computerBoxChoice.value = 4
          computerArray.value.push(computerBoxChoice.value + 1)
        }

        if (lengthOfOpponentArray === 2) {
          let plays = [...playerOneArray.value, ...computerArray.value]
          let boxChoices = ref([])
          let playerOneTargetsTwoWays = ref(false)

          winCombo.value.filter(singleWinArray => {
            if (plays.every(index => singleWinArray.includes(index))) {
              playerOneTargetsTwoWays.value = true
              return
            }
          })

          if (playerOneTargetsTwoWays.value) {
            if (computerArray.value[0] === 1 || computerArray.value[0] === 9)  boxChoices.value = [2, 6]
            if (computerArray.value[0] === 3 || computerArray.value[0] === 7)  boxChoices.value = [0, 8]
            let random = Math.round(Math.random() * (boxChoices.value.length - 1))
            computerBoxChoice.value = boxChoices.value[random]
          }
          else {
            winCombo.value.filter(singleWinArray => {
              if (playerOneArray.value.every(index => singleWinArray.includes(index))) {
                computerBoxChoice.value = singleWinArray.filter(index =>!playerOneArray.value.includes(index)) - 1
              }
            })
          }

          computerArray.value.push(computerBoxChoice.value + 1)
        }

        if (lengthOfOpponentArray === 3) {
          winCombo.value.filter(singleArray => {

          })
          // let targetArray = ref([])
          // winCombo.value.filter(singleWinArray => {
          //   if (playerOneArray.value.every(index => singleWinArray.includes(index))) {
          //     targetArray.value = singleWinArray
          //     return
          //   }
          // })

          // let emptyCell = targetArray.value.filter(index =>!playerOneArray.value.includes(index) )
          // computerBoxChoice.value = emptyCell
          // computerArray.value.push(computerBoxChoice.value + 1)

        }

        if (lengthOfOpponentArray === 4) {
          // let targetArray = ref([])
          // winCombo.value.filter(singleWinArray => {
          //   if (playerOneArray.value.every(index => singleWinArray.includes(index))) {
          //     targetArray.value = singleWinArray
          //     return
          //   }
          // })

          // let emptyCell = targetArray.value.filter(index =>!playerOneArray.value.includes(index) )
          // computerBoxChoice.value = emptyCell
          // computerArray.value.push(computerBoxChoice.value + 1)
          // currentPlayer.value = playerOneAlphabet.value
        }

        currentPlayer.value = playerOneAlphabet.value
      }

      if (currentPlayer.value === playerTwoAlphabet.value) {
        e.target.innerText = playerTwoAlphabet.value;
        currentPlayer.value = playerOneAlphabet.value;
        playerTwoArray.value.push(toNumber(e.target.id));
        if (playerTwoArray.value.length > 2) checkWin(2);
        return;
      }
    }

    function setPlayerOneAlphabet(event) {
      if (vsComputer.value) {
        event === 'X' ? computerAlphabet.value = 'O' : computerAlphabet.value = 'X'
    } 
    else {
        event === 'X' ? playerTwoAlphabet.value = 'O' : playerTwoAlphabet.value = 'X'
    }
      playerOneAlphabet.value = event;
      selectPlayerAlphabet.value = false;  
      currentPlayer.value = playerOneAlphabet.value;
    }

    function checkWin(player) {
      const win = ref(false)

      if (player === 1) {
        for (let index = 0; index < winCombo.value.length; index++) {
          const subArray = winCombo.value[index];

          win.value = subArray.every((element, index) => {
            return playerOneArray.value.includes(element) === true;
          });

          if (win.value) {
            winnerCombination.value = subArray;
            playerOneWins.value++;
            currentPlayer.value = playerOneAlphabet.value;
            setTimeout(() => {
              resetAndRestart();
            }, 1000);
            return;
          }
        }
      }

      else {
        for (let index = 0; index <  winCombo.value.length; index++) {
          const subArray = winCombo.value[index];
          win.value = subArray.every((element, index) => playerTwoArray.value.includes(element) === true)

          if (win.value) {
            winnerCombination.value = subArray;
            playerTwoWins.value++;
            currentPlayer.value = playerTwoAlphabet.value;
            setTimeout(() => {
              resetAndRestart();
            }, 1000);
            return;
          }
        }
      }

      if (((playerOneArray.value.length === 5) || playerTwoAlphabet.value.length === 5) && !win.value) {
        drawTies.value++
        setTimeout(() => {              
          resetAndRestart()
        }, 300);
      }
    }
    
    function resetAndRestart() {
      boxes.value.forEach(each => {
          each.innerText = '';
      });
      playerOneArray.value = [];
      playerTwoArray.value = [];
      if (vsComputer.value) {
        computerArray.value = []
        computerBoxChoice.value = null
      }
      playHasStarted.value = false;
      winnerCombination.value = [];
    }

    function clearAndRestart() {
      resetAndRestart()
      playerOneWins.value = 0
      playerTwoWins.value = 0
      computerWins.value = 0
    }

    return {
      checkWin,
      clearAndRestart,
      resetAndRestart,
      setPlayerOneAlphabet,
      play,
      winCombo,
      playerTwoWins,
      playerOneWins,
      winnerCombination,
      computerBoxChoice,
      currentPlayer,
      playerTwoArray,
      playerOneArray,
      playerTwoAlphabet,
      playerOneAlphabet,
      computerAlphabet,
      drawTies,
      boxes,
      playHasStarted,
      selectPlayerAlphabet,
      isDarkMode,
      vsComputer,
    }
})

