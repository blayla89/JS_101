/*

# Write a program that asks the user to enter an integer greater than 0,
  then asks whether the user wants to determine the sum or the product of
  all numbers between 1 and the entered integer, inclusive.

Problem ----------------------------
-Input: Number (int > 0)
-Output: String displaying result of chosen operation(sum or product)
-Details:
  - operation is either sum or product
  - perform the calculation on all integers between 1 and n inclusive

Examples-----------------------------

  ------------ SUM ------------------
  Please enter an integer greater than 0: 5
  Enter "s" to compute the sum, or "p" to compute the product. s

  The sum of the integers between 1 and 5 is 15.

  ------------ PRODUCT --------------
    Please enter an integer greater than 0: 6
    Enter "s" to compute the sum, or "p" to compute the product. p

    The product of the integers between 1 and 6 is 720.

Mental Model -----------------------

  # 5, sum

  5 -> 1 + 2 + 3 + 4 + 5 => 15

  # 3, product

  3 -> 1 * 2 * 3 => 7

Data Structure: n/a

Algorithm -------------------------

- import readline-sync library and store object in `rlSync`

- Prompt user for number greater than 0
  - SET `num` to input and coerce to Number data type

-Prompt user for operation : either 's' or 'p'
  - SET `operation` to user input

- check if operation is `s` or `p`:
  - if `s` :
    - SET `sum` and initialize to 0
    - iterate over number from 1 to `Number` [inclusive]
    - update `sum` by adding the current value
    - display string with `operation` and final value of `sum`

  - if `p` :
    - SET `product` and initialize to 1
    - iterate over number from 1 to `Number` [inclusive]
    - update `product` by multiplying the current value
    - display string with `operation` and final value of `product`

*/

/* //////////////// ORIGNAL SOLUTION ///////////////////
let rlSync = require('readline-sync');

console.log(`Please enter an integer greater than 0:`);
let num = rlSync.prompt();

console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
let operation = rlSync.prompt();
let formattedOperation = operation.toLowerCase().trim();

if (formattedOperation === 's') {
  let sum = 0;
  for (let idx = 1; idx <= num; idx += 1) {
    sum += idx;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
} else if (formattedOperation === 'p') {
  let product = 1;
  for (let idx = 1; idx <= num; idx += 1) {
    product *= idx;
  }
  console.log(`The product of the integers between 1 and ${num} is ${product}`);
}

 */


function computeSum(num) {
  let sum = 0;

  for (let idx = 1; idx <= num; idx += 1) {
    sum += idx;
  }

  return sum;
}

function computeProduct(num) {
  let product = 1;

  for (let idx = 1; idx <= num; idx += 1) {
    product *= idx;
  }

  return product;
}

function isNaN(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

let rlSync = require('readline-sync');

let number = rlSync.question(`Please enter an integer greater than 0:`);

while (isNaN(number)) {
  number = rlSync.question(`Oops. Please enter a valid number greater than 0:`);
}

number = parseInt(number, 10);

let operation = rlSync.question(`Enter 's' to compute the sum or 'p' to compute the product.`);
let formattedOperation = operation.toLowerCase();

while (!['s', 'p'].includes(formattedOperation)) {
  console.log(`Oops. Please enter either 's' or 'p': `);
  formattedOperation = rlSync.question();
}

if (formattedOperation === 's') {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (formattedOperation === 'p') {
  let product = computeProduct(number);
  console.log(`The product of the integers between 1 and ${number} is ${product}`);
}