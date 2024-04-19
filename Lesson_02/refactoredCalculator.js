// Pseudocode
/*
  validate user input
  - declare formatted and initialize to response with blank
  spaces removed and set to all lowercase letters
  - check if response is yes or no
    - if no, ask the user to enter only yes or no
    - if yes, continue
*/

console.log(`Welcome to Calculator!`);

let rlSync = require('readline-sync');

let performOperation = true;

function prompt(message) {
  return console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return  number.trimStart() === '' || Number.isNaN(Number(number));
}

while (performOperation) {
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

  prompt(`Do you want to perform another calculation?\n Yes or No`);
  let response = rlSync.question();
  let formatted = response.trim().toLowerCase();

  while (!(formatted === 'yes' || formatted === 'no')) {
    prompt(`Please enter either yes or no`);
    formatted = rlSync.question();
  }

  if (formatted === 'no') {
    performOperation = false;
    prompt(`Thank you for using calculator. See you next time!`);
  }
}


