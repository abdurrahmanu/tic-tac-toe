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
    const vsPC = ref(false)
    const computerAlphabet = ref('')
    const computerChoiceIndex = ref()
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
        if (vsPC.value) currentPlayer.value = computerAlphabet.value
        else currentPlayer.value = playerTwoAlphabet.value;
        playerOneArray.value.push(toNumber(e.target.id));
        if (playerOneArray.value.length > 2) checkWin(1);
        if (!vsPC.value) return;
      } 


      if (currentPlayer.value === computerAlphabet.value) {
        let numberOfOpponentPlays = playerOneArray.value.length
        
        // ...........................COMPUTER FIRST MOVE............................
        if (numberOfOpponentPlays === 1) {
          if (playerOneArray.value[0] === 5) {
            let boxChoices = [0, 2, 6, 8]
            let random = Math.round(Math.random() * (boxChoices.length - 1))
            computerChoiceIndex.value = boxChoices[random]
          }

          else computerChoiceIndex.value = 4
          computerArray.value.push(computerChoiceIndex.value + 1)
        }

        // .....................COMPUTER SECOND MOVE........................
        if (numberOfOpponentPlays === 2) {
          const targetRow = winCombo.value.filter(singleWinArray => {
            return playerOneArray.value.every(index => singleWinArray.includes(index))
          })[0]

          
          if (targetRow) {
            const targetRowIsFilled = targetRow.includes(computerArray.value[0])

            if (targetRowIsFilled) {
              let choices = [1,3,5,7]
              let random = Math.round(Math.random() * (choices.length - 1))
              computerChoiceIndex.value = choices[random]
            }  else {
              let emptyCellIndex = targetRow.filter(cell => !playerOneArray.value.includes(cell)) - 1
              computerChoiceIndex.value = emptyCellIndex
            }
          }
          else {

            let possibleRows = winCombo.value.filter(singleWinArray => (singleWinArray.includes(playerOneArray.value[0]) || singleWinArray.includes(playerOneArray.value[1])) && !singleWinArray.includes(5))
            console.log(possibleRows);

            if (possibleRows.length === 2) {
              let cell = possibleRows[0].filter((cell, index) => {
                return possibleRows[1].includes(cell) 
              }) - 1

              computerChoiceIndex.value = cell
            } else {
              let cell = possibleRows[0].filter((cell, index) => {
                return (possibleRows[1].includes(cell) || possibleRows[2].includes(cell)) && !playerOneArray.value.includes(cell)
              }) - 1
              
              let cell2 = possibleRows[1].filter((cell, index) => {
                return possibleRows[2].includes(cell) && !playerOneArray.value.includes(cell)
              }) - 1

              computerChoiceIndex.value = cell !== -1 ? cell : cell2
            }
          }

          computerArray.value.push(computerChoiceIndex.value + 1)
        }

        //................COMPUTER THIRD MOVE......................
        if (numberOfOpponentPlays === 3) {

        }

        //...................COMPUTER FOURTH MOVE.................
        if (numberOfOpponentPlays === 4) {

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
      if (vsPC.value) {
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
      if (vsPC.value) {
        computerArray.value = []
        computerChoiceIndex.value = null
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
      computerChoiceIndex,
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
      vsPC,
    }
})

