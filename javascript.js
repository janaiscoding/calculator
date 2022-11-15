let operandA = '';
let operandB = '';
let currentOperator = '';

function add(a,b) {
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide (a,b){
    return a/b;
}

function operate(a,operator,b){
    if (operator === '+') {
       return currentScreen.textContent = add(a,b);
    }
    else if (operator === '-') {
        return currentScreen.textContent = subtract(a,b);
    }
    else if (operator === '*') {
        return currentScreen.textContent = multiply(a,b);
    }
    else if (operator === '/' && b!= 0){
        return currentScreen.textContent = divide(a,b);
    }
    else return currentScreen.textContent = "You can't divide by 0";

}
const lastScreen = document.querySelector(".last-value");
const currentScreen = document.querySelector(".current-value");
const numberButtons = document.querySelectorAll("#number-btn");
const operatorButtons = document.querySelectorAll("#operator-btn");
const resultButton = document.querySelector("#result-btn");

resultButton.onclick = () => operate(operandA, currentOperator, operandB);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    getNumber(button.textContent);
  });
});

operatorButtons.forEach((operator)=> {
    operator.addEventListener('click', () =>{
    getOperator(operator.textContent);
    getLast();
    });
});

function getLast(){
    lastScreen.textContent = `${operandA} ${currentOperator}`; 
}

function getNumber(number) {
 currentScreen.textContent += number;
}
function getOperator(opera) {
 operandA = currentScreen.textContent;
 currentScreen.textContent += opera;
 currentOperator = opera;
}
function finishMath() {

}
function clearButton() {

}