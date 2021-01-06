let numberOfDigits = 1;
const getRandomNumber = (m = 1) => ~~(Math.random() * Math.pow(10, numberOfDigits) * m);
let multiplier = 3;

const operationList = [
  'add',
  'substract',
  'multiply',
  'divide',
]

let currentOperation = operationList[0]
const addNumbersElement = document.querySelector('.add-numbers')

operationList.forEach(label => {
  const radioElement = document.createElement('input')
  radioElement.type = 'radio'
  radioElement.name = 'dar nu am vrut sa fac asta'
  radioElement.value = label
  radioElement.setAttribute('id', label)

  const labelElement = document.createElement('label')
  labelElement.setAttribute('for', label)
  labelElement.textContent = label

  addNumbersElement.appendChild(radioElement)
  addNumbersElement.appendChild(labelElement)
})


const subTitle = document.querySelector('h2')
subTitle.textContent = 'orice de aici'

const addNumbersContainer = document.querySelector(".add-numbers");
const length = 25;

const colorList = [
  '14a6d2',
  'd49811',
  '65a20f',
  'cc1313',
  '036',
  '000',
]

Array.from({ length }).forEach(() => {
  // create a wrapper to hold the assignment and the result
  const row = document.createElement("div");
  row.className = "row";
  const firstNumber = getRandomNumber(multiplier);
  const secondNumber = getRandomNumber(multiplier);

  const getColoredText = number => String(number)
    .split('')
    .reverse()
    .map((n, k) => `<span style="color: #${colorList[k]}">${n}</span>`)
    .reverse()
    .join('')
  row.innerHTML = `${getColoredText(firstNumber)} <span style="color: #cc1313">+</span> ${getColoredText(secondNumber)} <span style="color: #cc1313">=</span> `;
  // row.innerHTML = `${getColoredText(firstNumber)} <span style="color: #cc1313">&times;</span> ${getColoredText(secondNumber)} <span style="color: #cc1313">=</span> `;

  // add an input to write the solution in
  const input = document.createElement("input");
  input.className = "input-text";
  input.style.width = "40px";
  // input.type = 'number'
  input.style.textAlign = "right";
  input.type = "number";

  row.appendChild(input);

  // add a check result button
  const checkResult = document.createElement("button");
  checkResult.className = "input-button";
  checkResult.innerText = "Check result";
  checkResult.addEventListener("click", e => {
    const input = e.target.parentNode.querySelector("input");
    const result = firstNumber + secondNumber === parseFloat(input.value);
    checkResult.className = !result ? "error" : "success";
  });

  row.appendChild(checkResult);

  // show on screen the row
  addNumbersContainer.appendChild(row);
});
