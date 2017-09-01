'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message2').text('Sign Up Successful!')
}
const signUpFailure = function (data) {
  console.log(data)
  $('#message2').text('Something went wrong, try again!')
}





module.exports = {
  signUpSuccess,
  signUpFailure
}
