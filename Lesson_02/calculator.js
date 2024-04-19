/*
  Pseudocode ---------------------

  - ask user for first number
  - ask user for second number
  - ask user for operation to perform
  - perform the operation on the 2 numbers obtained
  - print the result to the terminal

*/

console.log(`Welcome to Calculator!`);

let playAgain = true;

  let rlSync = require('readline-sync');

  console.log(`What's the first number?`);
  let number1 = rlSync.question();

  console.log(`What's the second number?`);
  let number2 = rlSync.question();

  console.log(`${number1}, ${number2}`);

  console.log(`What operation do you want to perform\n1)Add 2)Subtract 3)Multiply 4)Divide`);
  let operation = rlSync.question();


  let output;

  if (operation === '1') {
    output = Number(number1) + Number(number2);
  } else if (operation === '2') {
    output = Number(number1) - Number(number2);
  } else if (operation === '3') {
    output = Number(number1) * Number(number2);
  } else if (operation === '4') {
    output = Number(number1) / Number(number2);
  }

  console.log(`The result is: ${output}`);
 

