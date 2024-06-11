/* -------------PROBLEM DESCRIPTION---------------------

  # Write a program that prompts the user for two
    positive integers, and then prints the results
    of the following operations on those two numbers:
    addition, subtraction, product, quotient, remainder,
    and power. Do not worry about validating the input.

------------------------------------------------------ */

// VARIABLES -------------------------------

const READLINE = require('readline-sync');

// FXNS ------------------------------------

function prompt(message) {
  console.log(`==> ${message}`);
}

function getInput() {
  return READLINE.question();
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return Math.floor(num1 / num2);
}

function remainder(num1, num2) {
  return num1 % num2;
}

function exponentiation(num1, num2) {
  return num1 ** num2;
}

function displayResult(num1, num2, operation, result) {
  prompt(`${num1} ${operation} ${num2} = ${result}`);
}

// MAIN ----------------------------------------------

prompt(`Enter the first number:`);

let num1 = Number(getInput());

prompt(`Enter the second number:`);

let num2 = Number(getInput());

displayResult(num1, num2, '+', add(num1, num2));
displayResult(num1, num2, '-', subtract(num1, num2));
displayResult(num1, num2, '*', multiply(num1, num2));
displayResult(num1, num2, '/', divide(num1, num2));
displayResult(num1, num2, '%', remainder(num1, num2));
displayResult(num1, num2, '**', exponentiation(num1, num2));


/* -----------------BOOK SOUTION------------------------

  const readlineSync = require("readline-sync");

  console.log("Enter the first number:");
  let firstNumber = Number(readlineSync.prompt());
  console.log("Enter the second number:");
  let secondNumber = Number(readlineSync.prompt());

  console.log(`${firstNumber} + ${secondNumber}
     = ${firstNumber + secondNumber}`);
  console.log(`${firstNumber} - ${secondNumber}
    = ${firstNumber - secondNumber}`);
  console.log(`${firstNumber} * ${secondNumber}
    = ${firstNumber * secondNumber}`);
  console.log(`${firstNumber} / ${secondNumber}
    = ${Math.floor(firstNumber / secondNumber)}`);
  console.log(`${firstNumber} % ${secondNumber}
     = ${firstNumber % secondNumber}`);
  console.log(
    `${firstNumber} ** ${secondNumber}
     = ${Math.pow(firstNumber, secondNumber)}`
  );

------------------------------------------------------ */