import { defineStore } from 'pinia'
import { toNumber } from '@vue/shared';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    playerOneAlphabet: '',
    boxes: [],
    drawTies: 0,
    isDarkMode : localStorage.getItem('bgMode'),
    playHasStarted: false,
    toggleModal: true,
    toggleSideBar: false,
    playerTwoAlphabet : '',
    playerOneArray : [],
    playerTwoArray : [],
    currentPlayer : '',
    winnerCombination : [],
    playerOneWins: 0,
    playerTwoWins: 0,
    options: ['About', 'More', 'Free', 'Contact'],
    winCombo: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ],
  }),
  getters: {

  },
  actions: {
    play(e) {
      if (!this.playHasStarted) {
        this.playHasStarted = true;
        localStorage.setItem('playHasStarted', true);
      }
      if (this.winnerCombination.length) return;
      if (e.target.innerText) return;
      
      this.boxes.push(e.target)
      this.playAudio('../../public/audio/makeMove.mp3');
      
      if (this.currentPlayer === this.playerOneAlphabet) {
        e.target.innerText = this.playerOneAlphabet;
        this.currentPlayer = this.playerTwoAlphabet;
        this.playerOneArray.push(toNumber(e.target.id));
        if (this.playerOneArray.length > 2) {
          this.checkWin('first');
        }
        return;
      } else {
        e.target.innerText = this.playerTwoAlphabet;
        this.currentPlayer = this.playerOneAlphabet;
        this.playerTwoArray.push(toNumber(e.target.id));
        if (this.playerTwoArray.length > 2) {
          this.checkWin('second');
        }
        return;
      }
    },
    playAudio (url) {
      new Audio(url).play();
    },
    setPlayerOneAlphabet(e) {
      this.playerOneAlphabet = e;
      this.currentPlayer = this.playerOneAlphabet;
      this.playAudio('../../public/audio/chooseAlphabetSound.mp3');
      if (this.playerOneAlphabet === 'X') this.playerTwoAlphabet = 'O';
      else this.playerTwoAlphabet = 'X';
      setTimeout(() => {        
        this.toggleModal = false;
      }, 200);
    },
    checkWin(player) {
      if (player === 'first') {
        for (let index = 0; index < this.winCombo.length; index++) {
          const subArray = this.winCombo[index];

          let win = subArray.every((element, index) => {
            return this.playerOneArray.includes(element) === true;
          });
          if (win) {
            this.winnerCombination = subArray;
            this.playerOneWins++;
            this.currentPlayer = this.playerOneAlphabet;
            this.playAudio('../../public/audio/winSound.mp3');
            setTimeout(() => {
              this.resetAndRestart();
            }, 900);
            return;
          }

          if ((this.playerOneArray.length === 5) && !win) {
            this.drawTies++
            setTimeout(() => {              
              this.resetAndRestart()
            }, 300);
          }
        }
      } else {
        for (let index = 0; index < this. winCombo.length; index++) {
          const subArray = this.winCombo[index];

          let win = subArray.every((element, index) => {
            return this.playerTwoArray.includes(element) === true;
          });

          if (win) {
            this.winnerCombination = subArray;
            this.playerTwoWins++;
            this.currentPlayer = this.playerTwoAlphabet;
            this.playAudio('../../public/audio/winSound.mp3');
            setTimeout(() => {
              this.resetAndRestart();
            }, 900);
            return;
          }

          if ((this.playerTwoArray.length === 5) && !win) {
            console.log('draww');
            this.drawTies++;
            setTimeout(() => {
              this.resetAndRestart()
            }, 300);
          }
        }
      }
    },
    resetAndRestart() {
      this.boxes.forEach(each => {
          each.innerText = '';
      });
      this.playerOneArray = [];
      this.playerTwoArray = [];
      this.playHasStarted = false;
      this.winnerCombination = [];
    },
    clearAndRestart() {
      this.resetAndRestart()
      this.playerOneWins = 0
      this.playerTwoWins = 0
    }
  }
})

