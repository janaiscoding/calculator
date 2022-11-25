let numA = ''
let numB = ''
let currentOperator = null
let shouldResetScreen = false

const numBtns = document.querySelectorAll('.number-btn');
const opBtns = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('.equals-btn');
const clearBtn = document.querySelector('.clear-all-btn');
const delBtn = document.querySelector('.delete-btn');
const deciBtn = document.querySelector('.decimal');
const previousScreen = document.querySelector('.previous-screen');
const currentScreen = document.querySelector('.current-screen');

//keypresses support
window.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) getNumber(e.key);
    if (e.key === '.') getDecimal();
    if (e.key === '=' || e.key === 'Enter') evaluate();
    if (e.key === 'Backspace') deleteOne();
    if (e.key === 'Escape') clear();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') getOperator(e.key);
      
});

//on click event listeners
equalsBtn.onclick = () => evaluate();
clearBtn.onclick = () => clear();
delBtn.onclick = () => deleteOne();
deciBtn.onclick = () => getDecimal();

//clicked numbers
numBtns.forEach((e) => {e.onclick = () => getNumber(e.textContent);});

//clicked operators
opBtns.forEach((e) => {e.onclick = () => getOperator(e.textContent);});


function getNumber(number) {
  if (currentScreen.textContent === '0' || shouldResetScreen)
    resetScreen();
  currentScreen.textContent += number;
}

function resetScreen() {
  currentScreen.textContent = '';
  shouldResetScreen = false;
}

function clear() {
  currentScreen.textContent = '0';
  previousScreen.textContent = '';
  numA = '';
  numB = '';
  currentOperator = null;
}

function getDecimal() {
  if (shouldResetScreen) resetScreen();
  if (currentScreen.textContent === '')
    currentScreen.textContent = '0';
  if (currentScreen.textContent.includes('.')) return;
  currentScreen.textContent += '.'
}

function deleteOne() {
    let deletedOutput = currentScreen.textContent.slice(0, -1);
    currentScreen.textContent = deletedOutput;
}

function getOperator(operator) {
  if (currentOperator !== null) evaluate();
  numA = currentScreen.textContent;
  currentOperator = operator;
  previousScreen.textContent = `${numA} ${currentOperator}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetScreen) return
  if (currentOperator === '/' && currentScreen.textContent === '0') {
    currentScreen.textContent ="You can't divide by 0!";
    return
  }
  numB = currentScreen.textContent
  currentScreen.textContent = roundResult(
    operate(currentOperator, numA, numB)
  )
  previousScreen.textContent = `${numA} ${currentOperator} ${numB} =`
  currentOperator = null
}


// basic math stuff
function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}


function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return substract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}