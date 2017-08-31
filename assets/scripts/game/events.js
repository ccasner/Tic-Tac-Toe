'use strict'

const gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

// if users selects any of these 8 combinations, they win
// const gameBoardWins = [
//   [gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X'],
//   [gameBoard[3], gameBoard[4], gameBoard[6]],
//   [gameBoard[6], gameBoard[7], gameBoard[8]],
//   [gameBoard[0], gameBoard[3], gameBoard[6]],
//   [gameBoard[1], gameBoard[4], gameBoard[7]],
//   [gameBoard[2], gameBoard[5], gameBoard[8]],
//   [gameBoard[0], gameBoard[4], gameBoard[8]],
//   [gameBoard[2], gameBoard[4], gameBoard[6]]
// ]
const winningBoards = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
// gameBoard[winningBoards[i][0] = ]

let count = 0

// const winner = function () {
//   if (count >= 5) {
//     if (gameBoard[0] === gameBoard[1]) {
//       console.log(gameBoard[0] + ' WINS!')
//     }
//   }
// }

const userXMove = function () {
  if ($(this).text() === '' && count % 2 === 0) {
    $(this).text('X')
    count++
    console.log(count)
    gameBoard[$(this).attr('id')] = 'X'
    console.log(gameBoard)
    checkForWinner()
  } else if ($(this).text() !== '') {
    $('#message').text('Must play empty space')
  }
  return count
}

const userOMove = function () {
  if ($(this).text() === '' && count % 2 !== 0) {
    $(this).text('O')
    count++
    console.log(count)
    gameBoard[$(this).attr('id')] = 'O'
    console.log(gameBoard)
    checkForWinner()
  }
  return count
}

let winner = ''
const checkMatch = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    winner = 'X'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    winner = 'X'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    winner = 'X'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    winner = 'X'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    winner = 'X'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    winner = 'X'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    winner = 'X'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    winner = 'X'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    winner = 'O'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    winner = 'O'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    winner = 'O'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    winner = 'O'
    console.log(winner + ' WINS!')
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    winner = 'O'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    winner = 'O'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    winner = 'O'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    winner = 'O'
    console.log(winner + ' WINS!')
    $('.element').off('click')
  } else if (count === 9 && winner === '') {
    console.log('Draw')
    $('.element').off('click')
  }
  return winner
}

const checkForWinner = function () {
  if (count >= 5 && count <= 9) {
    checkMatch()
  }
}
// const playGame = function () {
//   if (count === 9 && winner === '') {


// if the values in the indexes of the combos === "XXX" X wins

// let win = ''
// const findCombo = function () {
//   let indexValue = 0
//   if (count >= 5) {
//     for (let i = 0; i < winningBoards.length; i++) {
//       for (let j = 0; j < 3; j++) {
//         indexValue = winningBoards[i][j]
//         win += gameBoard[indexValue]
//       }
//     }
//   }
//   return win
// }


// const printValueAtIndex = function () {
//   for (let i = 0; i < winningBoards.length; i++) {
//     for (let j = 0; j < 3; j++) {
//       console.log(gameBoard[winningBoards[i][j]])
//     }
//   }
// }
// printValueAtIndex()


module.exports = {
  userXMove,
  userOMove,
  checkForWinner
}
