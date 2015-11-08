import { filter } from 'ramda'

const isEmpty = function (input) {
  if (input.value.length < 1) {
    input.setAttribute('style', 'background-color: mistyrose; border-color: crimson')
    input.setAttribute('placeholder', 'Please enter your ' + input.name)
    return true
  } else {
    input.setAttribute('style', '')
    return false
  }
}

const handleSubmission = function (e) {
  var inputs = e.target.querySelectorAll('input')

  var empties = filter(isEmpty, inputs)

  if (empties.length > 0) {
    e.preventDefault()
    empties[0].focus()
  }
}

const myForm = document.querySelector('#my-form')

myForm.addEventListener('submit', handleSubmission, false)

const update = function (e) { isEmpty(e.target) }

const email = document.querySelector('#email')
const pword = document.querySelector('#password')

email.addEventListener('keyup', update)
pword.addEventListener('keyup', update)
