document.querySelector('#btn').addEventListener('click', function () {
  let value = document.querySelector('#value').value
  value.toLowerCase()
  document.querySelector('.user').textContent = value

  let number = Math.floor(Math.random()*3)

  if(number === 0) {
    number = 'rock'
  } else if (number === 1) {
    number = 'paper'
  } else if (number === 2) {
    number = 'scissor'
  }

  document.querySelector('.pc').textContent = number

  if (value === number) {
    document.querySelector('.result').textContent = 'Draw'
  } else if (value === 'rock' && number === 'paper') {
    document.querySelector('.result').textContent = 'PC Win'
  } else if (value === 'rock' && number === 'scissor') {
    document.querySelector('.result').textContent = 'User Win'
  } else if (value === 'paper' && number === 'rock') {
    document.querySelector('.result').textContent = 'User Win'
  } else if (value === 'paper' && number === 'scissor') {
    document.querySelector('.result').textContent = 'PC Win'
  } else if (value === 'scissor' && number === 'paper') {
    document.querySelector('.result').textContent = 'User Win'
  } else if (value === 'scissor' && number === 'rock') {
    document.querySelector('.result').textContent = 'PC Win'
  } else if (value === '' && (number === 'rock' || number === 'scissor' || number === 'paper')) {
    document.querySelector('.result').textContent = 'Invalid Value'
  }

  if(value === '' || value === null) {
    document.querySelector('.pc').textContent = 'Idiot'
    document.querySelector('.user').textContent = 'Are You'
  }

})