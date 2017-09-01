'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id, // store.game.id
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const startNewGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}
const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    data
  })
}

// {
//   "game": {
//     "cell": {
//       "index": index,
//       "value": value
//     },
//     "over": over
//   }
// }

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  startNewGame
}
