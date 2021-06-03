'use strict';
let firstNumber = +prompt('Enter the first number');
let secondNumber = +prompt('Enter the second number');
let operationType = prompt('Enter operation sign'); 
function calculator(firstNumber, secondNumber, operationType) {
  switch (operationType) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
  }
}
alert(calculator(firstNumber, secondNumber, operationType));