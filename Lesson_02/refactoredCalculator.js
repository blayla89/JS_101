/*
  Refactored Components -----------------

  1. add distintive prompt
    - purpose: differentiate from normal terminal output
    - approach: extract logic to fxn that prepends => to
    front of string logged to console
  2. switch statement instead of if/else
  3. validate input
    a. validate number1 and number2
      - use while loop and function
    b. validate operation
      - use while loop
*/

console.log(`Welcome to Calculator!`);


let rlSync = require('readline-sync');

function prompt(message) {
  return console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return  number.trimStart() === '' || Number.isNaN(Number(number));
}
prompt(`What's the first number?`);
let number1 = rlSync.question();

while (invalidNumber(number1)) {
  prompt(`Please enter a valid number`);
  number1 = rlSync.question();
}

prompt(`What's the second number?`);
let number2 = rlSync.question();

while (invalidNumber(number2)) {
  prompt(`Please enter a valid number`);
  number2 = rlSync.question();
}

prompt(`${number1}, ${number2}`);

prompt(`What operation do you want to perform\n1)Add 2)Subtract 3)Multiply 4)Divide`);
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(`Must choose 1, 2, 3, or 4`);
  operation = rlSync.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}`);