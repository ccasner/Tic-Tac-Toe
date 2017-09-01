'use strict'
const store = require('../store')
const api = require('../auth/api')

let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

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

let count = 0
let winner = ''
let over = false

const userMove = function () {
  let value = ''
  const index = $(this).attr('id')
  if (winner !== '') {
    $('#message').text('Play Again?')
  } else if ($(this).text() === '') {
    if (count % 2 === 0) {
      $(this).text('X')
      value = 'X'
      gameBoard[index] = value
    } else if ($(this).text() === '') {
      $(this).text('O')
      value = 'O'
      gameBoard[index] = value
    }
  }
  store.game.cells = gameBoard
  checkForWinner()
  api.updateGame(index, value, over)
  console.log(index)
  console.log(value)
  console.log(over)
  console.log(count)
  console.log(gameBoard)
  console.log(store.game)
  return ++count
}

const checkForWinner = function () {
  if (count >= 4 && count <= 8) {
    checkWinner()
  }
}

const checkMatch = function (a, b, c) {
  if (gameBoard[a] === 'X' && gameBoard[b] === 'X' && gameBoard[c] === 'X') {
    winner = 'X'
    $('#message').text(winner + ' Wins!')
  } else if (gameBoard[a] === 'O' && gameBoard[b] === 'O' && gameBoard[c] === 'O') {
    winner = 'O'
    $('#message').text(winner + ' Wins!')
  } else if (count === 8 && winner === '') {
    $('#message').text('DRAW!')
  }
  if (winner !== '' || count === 8) {
    store.game.over = true
  }
  over = true
  console.log(store.game)
  return winner
}

const checkWinner = function () {
  let a = 0
  let b = 0
  let c = 0
  for (let i = 0; i < winningBoards.length; i++) {
    a = winningBoards[i][0]
    b = winningBoards[i][1]
    c = winningBoards[i][2]
    checkMatch(a, b, c)
  }
}

const clearBoard = function () {
  count = 0
  gameBoard = ['', '', '', '', '', '', '', '', '']
  winner = ''
  $('.grid').find('.element').text('')
  $('#message').text('')
  over = false
}

const newGame = function (event) {
  event.preventDefault()
  clearBoard()
}

module.exports = {
  userMove,
  checkForWinner,
  newGame
}
