'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message2').text('Sign Up Successful!')
  $('#sign-up').hide()
}
const signUpFailure = function () {
  $('#message2').text('Incorrect username or password, try again!').show()
}
const signInSuccess = function (data) {
  $('#message2').text('Sign In Successful!').show()
  $('#message2').delay(1000).fadeOut('slow')
  store.user = data.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#get-games').show()
  $('#start-game').show()
}
const signInFailure = function () {
  $('#message2').text('Incorrect username or password, try again!').show()
}
const newGameSuccess = function (data) {
  store.game = data.game
  $('#start-game').hide()
  $('.grid').show()
  $('#message').text('Player X starts')
  $('#message3').hide()
}
const newGameFailure = function () {
  $('#message2').text('Please Sign In to Play')
}
const changePasswordSuccess = function (data) {
  $('#change-password').hide()
  $('#passwordMessage').text('Password Reset Successfully!')
}
const changePasswordFailure = function () {
  $('#passwordMessage').text('Something went wrong, try again!')
}
const signOutSuccess = function () {
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#play-again').hide()
  $('.grid').hide()
  $('#get-games').hide()
  $('#message3').hide()
  $('#start-game').hide()
  $('#message2').text('Sign Out Successful!').show()
  $('#message2').delay(1000).fadeOut('slow')
}
const signOutFailure = function () {
  $('#message2').text('Something went wrong, try again!')
}
const getGamesSuccess = function (data) {
  store.games = data.games
  $('#message3').text('You have played ' + store.games.length + ' games!').show()
}
const getGamesFailure = function () {
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
