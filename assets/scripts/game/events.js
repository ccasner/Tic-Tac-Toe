'use strict'

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

const checkForWinner = function () {
  if (count >= 5 && count <= 9) {
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
  } else if (count === 9 && winner === '') {
    $('#message').text('DRAW!')
  }
  if (winner !== '' || count === 9) {
    $('.element').off('click')
  }
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
}

const newGame = function (event) {
  event.preventDefault()
  clearBoard()
}

module.exports = {
  userXMove,
  userOMove,
  checkForWinner,
  newGame
}
