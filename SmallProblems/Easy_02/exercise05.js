/* -------------PROBLEM DESCRIPTION---------------------

  Write a program that prompts the user for two
  positive integers, and then prints the results
  of the following operations on those two numbers:
  addition, subtraction, product, quotient, remainder,
  and power. Do not worry about validating the input.

------------------------------------------------------ */

/* Example: ===========================================

  ==> Enter the first number:
  23
  ==> Enter the second number:
  17
  ==> 23 + 17 = 40
  ==> 23 - 17 = 6
  ==> 23 * 17 = 391
  ==> 23 / 17 = 1
  ==> 23 % 17 = 6
  ==> 23 ** 17 = 1.4105003956066297e+23

=======================================================  */

// VARIABLES & FXNS -----------------------------------

const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let product = (num1, num2) => num1 * num2;
let quotient = (num1, num2) => num1 / num2;

let remainder = (num1, num2) => num1 % num2;
let exponentiation = (num1, num2) => num1 ** num2;

const operations = [[add, '+'], [subtract, '-'],[product, '*'],
  [quotient, '/'], [remainder, '%'], [exponentiation, '**']];


function calculate(num1, num2, arr) {
  arr.forEach(subArr => {
    prompt(`${num1} ${subArr[1]} ${num2} = ${subArr[0](num1, num2)} `);
  });
}

// MAIN ----------------------------------------------

prompt(`Enter the first number:`);
let num1 = Number(READLINE.question());

prompt(`Enter the second number:`);
let num2 = Number(READLINE.question());


calculate(num1, num2, operations);
// ---------------------------------------------------

/* ------------- BOOK SOLUTION ---------------------

  const readlineSync = require("readline-sync");

  console.log("Enter the first number:");
  let firstNumber = Number(readlineSync.prompt());
  console.log("Enter the second number:");
  let secondNumber = Number(readlineSync.prompt());

  console.log(`${firstNumber} + ${secondNumber} =
                ${firstNumber + secondNumber}`);

  console.log(`${firstNumber} - ${secondNumber} =
                 ${firstNumber - secondNumber}`);

  console.log(`${firstNumber} * ${secondNumber} =
                 ${firstNumber * secondNumber}`);

  console.log(`${firstNumber} / ${secondNumber} =
                 ${Math.floor(firstNumber / secondNumber)}`);

  console.log(`${firstNumber} % ${secondNumber} =
                 ${firstNumber % secondNumber}`);

  console.log(`${firstNumber} ** ${secondNumber} =
                 ${Math.pow(firstNumber, secondNumber)}`
  );

------------------------------------------------------ */


/* // VARIABLES -------------------------------

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
} */

// MAIN ----------------------------------------------
/*
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

 */
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