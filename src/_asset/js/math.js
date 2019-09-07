const getRandomNumber = (m = 1) => ~~(Math.random() * 10 * m)
let multiplier = 3

const addNumbersContainer = document.querySelector('.add-numbers')
const length = 13
const a = 2

Array
  .from({ length })
  .forEach(() => {
    // create a wrapper to hold the assignment and the result
    const row = document.createElement('div')
    const firstNumber = getRandomNumber(multiplier)
    const secondNumber = getRandomNumber(multiplier)
    row.innerText = `${firstNumber} + ${secondNumber} = `
    
    // add an input to write the solution in
    const input = document.createElement('input')
    input.style.width = '40px'
    // input.type = 'number'
    input.style.textAlign = 'right'
    input.type = 'number'

    row.appendChild(input)

    // add a check result button
    const checkResult = document.createElement('button')
    checkResult.innerText = 'Check result'
    checkResult.addEventListener('click', e => {
      const input = e.target.parentNode.querySelector('input')
      const result = firstNumber + secondNumber === parseFloat(input.value)
      checkResult.className = !result ? 'error' : 'success'
    })

    row.appendChild(checkResult)
    
    // show on screen the row
    addNumbersContainer.appendChild(row)
  })
