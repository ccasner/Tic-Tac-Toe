'use strict'

const gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]
// const setElementId = function ($(this)) {
//   const elementId = $(this
//   for (let i = 0; i < gameBoard.length; i++) {
//     elementId = i
// }

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
let count = 0

// const checkForWin = function (gameBoard) {
//     if (gameBoard[0] === gameBoard[1] === gameBoard[2]) {
//       console.log(gameBoard[0] + 'WINS!')
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
    checkForWin(gameBoard)
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
  }
  return count
}




// const turn = function (userX, userO) {
//   if (count % 2 !== 0) {
//     userX
//   } else {
//     userO
//   }
// }
// turn(userXMove, userOMove)





module.exports = {
  userXMove,
  userOMove
}
