//display
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

//buttons
const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const resultButton = document.querySelector(".equals-btn");
const clearButton = document.querySelector(".clear-all-btn");
const deleteButton = document.querySelector(".delete-btn");
const decimalButton = document.getElementsByClassName(".decimal-btn");

//initial values
let operandA = '';
let operandB = '';
let operandC = '';
let currentOperator = '';
let operandANumber = parseFloat(operandA);
let operandBNumber = parseFloat(operandB);
let operandCNumber = parseFloat(operandC);
let nextOperator = '';

//on click event listeners
clearButton.onclick = () => clearAll(); 
deleteButton.onclick = () => deleteOne(); 
resultButton.onclick = () => getResult(); 
decimalButton.onclick = () => getDecimal();

//clicked numbers
numberButtons.forEach((button) => {button.onclick = () => getNumber(button.textContent);}); 
  
//clicked operators
operatorButtons.forEach((operator)=> {operator.onclick = () => getOperator(operator.textContent);});


// document keypresses
window.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) getNumber(e.key); 
    if (e.key === '=' || e.key === 'Enter') getResult();
    if (e.key === 'Backspace') deleteOne();
    if (e.key === 'Delete' || e.key === 'Escape') clearAll();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') getOperator(e.key);
    if (e.key === '.') getDecimal();
  });


//deletes just one and updates display
function deleteOne() {
    let deletedOutput = currentOperand.textContent.slice(0, -1);
    currentOperand.textContent = deletedOutput;
}

//stores current numbers on display
function getNumber(number) {
    currentOperand.textContent += number;
}

//sets a, operator, updates display
function getOperator(newOperator) { //calls function on click on operator
    
    currentOperand.textContent === '' ?  operandA = 0 : operandA = currentOperand.textContent;
    currentOperator = newOperator;
    currentOperand.textContent = '';
    previousOperand.textContent = operandA + `${currentOperator}`;
    
}

//sets b, runs operate function
function getResult(result){
    currentOperand.textContent === '' ? operandB = 0 : operandB = currentOperand.textContent; 
    previousOperand.textContent = operandA + `${currentOperator}` + operandB + `=`; //update previous display
    //converts the operands from string to numbers
    let operandANumber = parseFloat(operandA);
    let operandBNumber = parseFloat(operandB);
if (operandANumber === 0 && operandBNumber === 0 || currentOperator === undefined ) {
    previousOperand.textContent = '';
    currentOperand.textContent = "ERROR, insert correct data"; 
}
else {
    result = operate(operandANumber, currentOperator,operandBNumber);
    return result;
}
}

//deletes all of it, resets everything
function clearAll() {
    operandA = 0;
    operandB = 0;
    operandC = 0;
    currentOperand.textContent = '';
    previousOperand.textContent = '';
    currentOperator = undefined;
}
//function for getting the decimals input
function getDecimal(){
    if (resetData) resetScreen();
    if(currentOperand.textContent== '') currentOperand.textContent = '0';
    if(currentOperand.textContent.includes('.')) return;
    currentOperand.textContent += '.';
}

// round number function 
 function roundNumber(number){
    if (number.toString().indexOf('.' !== -1)){
           return number.toFixed(2);
  }
    return number;
}

// All the math functions
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

function operate(a,opera,b){
    let finalResult ='';
    if (opera === '+') {
      finalResult = add(a,b);
    }
    else if (opera === '-') {
        finalResult = subtract(a,b);
    }
    else if (opera === '*') {
        finalResult = multiply(a,b);
    }
    else if (opera === '/' && b!= 0){
        finalResult = divide(a,b);
    }
    else if (b === 0) {
        return currentOperand.textContent = "ERROR";
    }
    currentOperand.textContent = finalResult;

}

function checkData(){
    console.log(operandA);
    console.log(operandB);
    console.log(operandC);
    console.log(currentOperator);
}
   


