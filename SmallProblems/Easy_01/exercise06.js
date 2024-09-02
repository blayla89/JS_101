/* -----------------------PROBLEM-DESCRIPTION-------------------------------

   Write a program that asks the user to enter an integer greater than
   0, then asks whether the user wants to determine the sum or the product
   of all numbers between 1 and the entered integer, inclusive.

---------------------------------------------------------------------------- */
const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}


function sumRange(int) {
  if (int < 1) return int;

  return int + sumRange(int - 1);

}

function multiplyRange(int) {
  if (int <= 1) return int;

  return int * multiplyRange(int - 1);
}

function displayResult(operation, num) {
  let result;

  if (operation === 's') {
    operation = 'sum';
    result = sumRange(num);
    console.log(result);

  } else {
    operation = 'product';
    result = multiplyRange(num);
  }

  prompt(`The ${operation} of the integers between 1 and ${num} is ${result}.`);

}

// MAIN PROGRAM -------------------------------------------

prompt(`Please enter an integer greater than 0: `);
let int = Number(READLINE.question());

while (!Number.isInteger(int) || int < 1) {
  prompt(`Error: Invalid number. Please re-enter an integer greater than 0.`);
  int = Number(READLINE.question());
}

prompt(`Enter "s" to compute the sum, or "p" to compute the product.`);
let operation = READLINE.question().toLowerCase();

displayResult(operation, int);


/* -------------------------BOOK-SOLUTION----------------------------------

  function computeSum(targetNum) {
    let total = 0;

    for (let num = 1; num <= targetNum; num += 1) {
      total += num;
    }

    return total;
  }

  function computeProduct(targetNum) {
    let total = 1;

    for (let num = 1; num <= targetNum; num += 1) {
      total *= num;
    }

    return total;
  }

  let readlineSync = require("readline-sync");

  console.log("Please enter an integer greater than 0");
  let number = parseInt(readlineSync.prompt(), 10);

  console.log("Enter 's' to compute the sum, 'p' to compute the product.");
  let operation = readlineSync.prompt();

  if (operation === "s") {
    let sum = computeSum(number);
    console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
  } else if (operation === "p") {
    let product = computeProduct(number);
    console.log(
      `The product of the integers between 1 and ${number} is ${product}.`
    );
  } else {
    console.log("Oops. Unknown operation.");
  }

---------------------------------------------------------------------------- */