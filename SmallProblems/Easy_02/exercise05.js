/*
  # Given: Write a program that prompts the user for two
  positive integers, and then prints the results of the
  following operations on those two numbers: addition,
  subtraction, product, quotient, remainder, and power.
  Do not worry about validating the input.

  Problem --------------------------------------------
  - Input: Number (positive int)
  - Output: Number (positive int)
  - get operation from user and print the result of the
  selected operation

  Examples --------------------------------------------
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

  -GET 2 positive integers from user
    - explicitly coerce to Number type
  -Perform and print result of adding the 2 input numbers
  - perform and print result of subtracting the 2 input numbers
  - perform and print the result of multiplying the the input numbers
  - perform and print the result of dividing the 2 input numbers
  - perform and print the result of the remainder of the 2 input numbers
  - perform and print the result of first input number to the power
   of the second input number


*/


let rlSync = require('readline-sync');

console.log(`Enter the first number:`);
let num1 = rlSync.prompt();

console.log(`Enter the second number:`);
let num2 = rlSync.prompt();

function add(num1, num2) {
  let result = Number(num1) + Number(num2);
  console.log(`${num1} + ${num2} = ${result}`);
  return result;
}

function subtract(num1, num2) {
  let result = Number(num1) - Number(num2);
  console.log(`${num1} - ${num2} = ${result}`);
  return result;
}

function multiply(num1, num2) {
  let result = Number(num1) * Number(num2);
  console.log(`${num1} * ${num2} = ${result}`);
  return result;
}
function divide(num1, num2) {
  let result = Number(num1) / Number(num2);
  console.log(`${num1} / ${num2} = ${result}`);
  return result;
}

function remainder(num1, num2) {
  let result = Number(num1) % Number(num2);
  console.log(`${num1} % ${num2} = ${result}`);
  return result;
}
function powerOf(num1, num2) {
  let result = Number(num1) ** Number(num2);
  console.log(`${num1} ** ${num2} = ${result}`);
  return result;
}

function performOperations(num1, num2) {
  add(num1, num2);
  subtract(num1, num2);
  multiply(num1, num2);
  divide(num1, num2);
  remainder(num1, num2);
  powerOf(num1, num2);
}

performOperations(num1, num2);


/* -------- BOOK SOLUTION -----------------------

const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber /
secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);

*/