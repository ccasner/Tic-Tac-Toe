'use strict'

const gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

// if users selects any of these 8 combinations, they win
const gameBoardWins = [
  [gameBoard[0], gameBoard[1], gameBoard[2]],
  [gameBoard[3], gameBoard[4], gameBoard[6]],
  [gameBoard[6], gameBoard[7], gameBoard[8]],
  [gameBoard[0], gameBoard[3], gameBoard[6]],
  [gameBoard[1], gameBoard[4], gameBoard[7]],
  [gameBoard[2], gameBoard[5], gameBoard[8]],
  [gameBoard[0], gameBoard[4], gameBoard[8]],
  [gameBoard[2], gameBoard[4], gameBoard[6]]
]

// const move = function (event) {
//   event.preventDefault()
//   console.log('select move working')
// }
const move = function () {
  $(this).text('X')
}

module.exports = {
  move
}
