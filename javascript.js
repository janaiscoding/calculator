const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const equalsButton = document.querySelector(".equals-btn");
const clearButton = document.querySelector(".clear-all-btn");
const deleteButton = document.querySelector(".delete-btn");

let operandA = '';
let operandB = '';
let currentOperator = '';

equalsButton.onclick = () => operate(operandA, currentOperator, operandB); 

clearButton.onclick = () => clearAll(); // works

deleteButton.onclick = () => deleteOne(); // works

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    getNumber(button.textContent);
  });
}); //outputs the pressed numbers

operatorButtons.forEach((operator)=> {
    operator.addEventListener('click', () =>{
    getOperator(operator.textContent);
    });
});

function deleteOne() {
    let deletedOutput = currentOperand.textContent.slice(0, -1);
    currentOperand.textContent = deletedOutput;
}

function getNumber(number) {
    currentOperand.textContent += number;
}
function getOperator(opera) {

}


function clearAll() {
    operandA = 0;
    operandB = 0;
    currentOperand.textContent = '';
    previousOperand.textContent = '';
}


//math functions
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
       return currentOperand.textContent = add(a,b);
    }
    else if (operator === '-') {
        return currentOperand.textContent = subtract(a,b);
    }
    else if (operator === '*') {
        return currentOperand.textContent = multiply(a,b);
    }
    else if (operator === '/' && b!= 0){
        return currentOperand.textContent = divide(a,b);
    }
    else return currentOperand.textContent = "You can't divide by 0";
}