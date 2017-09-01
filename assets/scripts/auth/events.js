'use strict'
const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('signed up')
  const data = getFormFields(this)
}
