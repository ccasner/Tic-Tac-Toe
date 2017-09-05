'use strict'
const store = require('../store')
const gameEvents = require('../game/events')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message2').text('Sign Up Successful!')
  $('#sign-up').hide()
}
const signUpFailure = function (error) {
  console.log(error)
  $('#message2').text('Something went wrong, try again!')
}
const signInSuccess = function (data) {
  console.log(data)
  $('#message2').text('Sign In Successful!')
  store.user = data.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#get-games').show()
  $('#start-game').show()
}
const signInFailure = function (error) {
  console.log(error)
  $('#message2').text('Something went wrong, try again!')
}
const newGameSuccess = function (data) {
  console.log(data)
  store.game = data.game
  $('#start-game').hide()
  $('.grid').show()
}
const newGameFailure = function (error) {
  console.log(error)
  $('#message2').text('Please Sign In to Play')
}
const changePasswordSuccess = function (data) {
  console.log(data)
  $('#message2').text('Password Reset Successfully!')
}
const changePasswordFailure = function (error) {
  console.log(error)
  $('#message2').text('Something went wrong, try again!')
}
const signOutSuccess = function (data) {
  console.log(data)
  $('#message2').text('Sign Out Successful!')
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#play-again').hide()
  $('.grid').hide()
  $('#get-games').hide()
  $('#message3').text('')
  gameEvents.clearBoard()
}
const signOutFailure = function (error) {
  console.log(error)
  $('#message2').text('Something went wrong, try again!')
}
const getGamesSuccess = function (data) {
  store.games = data.games
  console.log(store.games)
  $('#message3').text('You have played ' + store.games.length + ' games!')
}
const getGamesFailure = function (error) {
  console.log(error)
  $('#message3').text('Something went wrong, try again!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  getGamesSuccess,
  getGamesFailure
}
