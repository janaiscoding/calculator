const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const resultButton = document.querySelector(".equals-btn");
const clearButton = document.querySelector(".clear-all-btn");
const deleteButton = document.querySelector(".delete-btn");


let operandA = '';
let operandB = '';
let currentOperator;
let finalResult = '';

clearButton.onclick = () => clearAll(); // works

deleteButton.onclick = () => deleteOne(); // works

resultButton.onclick = () =>{ getResult()};

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
function getOperator(eOperator) { //calls function on click on operator
    operandA = currentOperand.textContent; // assigns current text to operandA. works
    currentOperator = eOperator; // assigns current operator as the pressed button
    currentOperand.textContent = ''; // clears current display
    previousOperand.textContent = operandA + `${currentOperator}`; // stores previous screen as the operandA + current operator  
    // currentOperand.textContent = '';
}

function getResult(result){
    operandB = currentOperand.textContent;
    result = operate(operandA, currentOperator, operandB);
    return result;
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
    else "You can't divide by 0";
    currentOperand.textContent = finalResult;
}

//for checking data
function showData() {
console.log(operandA);
console.log(operandB);
console.log(currentOperator);
console.log(finalResult); 
}