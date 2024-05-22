/* -----------------------PROBLEM-DESCRIPTION-------------------------------
 # Write a program that asks the user to enter an integer greater than
   0, then asks whether the user wants to determine the sum or the product
   of all numbers between 1 and the entered integer, inclusive.

---------------------------------------------------------------------------- */

const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function computeSumOfConsecutiveIntegers(integer) {
  let sum = 0;
  for (let idx = 1; idx <= integer; idx += 1) {
    sum += idx;
  }
  return sum;
}

function computeProductOfConsecutiveIntegers(integer) {
  let product = 1;
  for (let idx = 1; idx <= integer; idx += 1) {
    product *= idx;
  }
  return product;
}

function displayOperationResult(operation, integer) {
  switch (operation) {
    case 's':
      prompt(`The sum of the integers between 1 and ${integer} is
       ${computeSumOfConsecutiveIntegers(integer)}.`);
      break;
    case 'p':
      prompt(`The product of the integers between 1 and ${integer} is 
      ${computeProductOfConsecutiveIntegers(integer)}.`);
      break;
    default:
      prompt(`Error: Invalid operation.`);
      break;
  }
}


// MAIN ---------------------------------------------------------------

prompt(`Please enter an integer greater than 0:`);
let integer = Number(READLINE.question());

prompt(`Please enter "s" to compute the sum, or "p" to compute the product:`);
let operation = READLINE.question();

displayOperationResult(operation, integer);


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
