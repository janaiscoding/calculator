const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const resultButton = document.querySelector(".equals-btn");
const clearButton = document.querySelector(".clear-all-btn");
const deleteButton = document.querySelector(".delete-btn");
const decimalButton = document.getElementsByClassName(".decimal-btn");

let operandA = '';
let operandB = '';
let currentOperator;
let finalResult = '';

clearButton.onclick = () => clearAll(); // works

deleteButton.onclick = () => deleteOne(); // works

resultButton.onclick = () => getResult(); //works

decimalButton.onclick = () => getDecimal();

// document keypresses
window.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) getNumber(e.key);
    if (e.key === '=' || e.key === 'Enter') getResult();
    if (e.key === 'Backspace') deleteOne();
    if (e.key === 'Delete' || e.key === 'Escape') clearAll();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') getOperator(e.key);
    if (e.key === '.') getDecimal();
  });

//clicked numbers
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    getNumber(button.textContent);
  });
}); 

//clicked operators
operatorButtons.forEach((operator)=> {
    operator.addEventListener('click', () =>{
    getOperator(operator.textContent);
    });
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
function getOperator(eOperator) { //calls function on click on operator
    if (currentOperand.textContent === '') {
        operandA = 0;
    } //fixes if nothing is inputed it makes a = 0 ;
    else {
        operandA = parseInt(currentOperand.textContent); }// assigns current text to operandA. works
    currentOperator = eOperator; // assigns current operator as the pressed button
    currentOperand.textContent = ''; // clears current display
    previousOperand.textContent = operandA + `${currentOperator}`; // stores previous screen as the operandA + current operator  
    // currentOperand.textContent = '';
}

//sets b, runs operate function
function getResult(result){
    if (currentOperand.textContent === '') {
        operandB = 0;
    } //fixes if nothing is inputed it makes b = 0 ;
    else {
    operandB = parseInt(currentOperand.textContent); } // assigns current text to operandB. works
    previousOperand.textContent = operandA + `${currentOperator}` + operandB + `=`; //update previous display
    result = operate(operandA, currentOperator, operandB);
    return result;
}

//deletes all of it, resets everything
function clearAll() {
    operandA = 0;
    operandB = 0;
    currentOperand.textContent = '';
    previousOperand.textContent = '';
}
//function for getting the decimals input
function getDecimal(){
    if(currentOperand.textContent== ''){
    currentOperand.textContent = '0';}
    else if(currentOperand.textContent.includes('.')) return
    currentOperand.textContent += '.';
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
    currentOperand.textContent = finalResult.toFixed(2); //support for only showing 2 decimals
}

//for checking data when unsure..
function showData() {
console.log(operandA);
console.log(operandB);
console.log(currentOperator);
console.log(finalResult); 
}