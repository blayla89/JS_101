// VARIABLES __________________________________________

const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let defaultLanguage = 'en';
const LANGUAGES = ['en', 'fr'];
let play = true;


// FXNS _______________________________________________

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidOperation(operation) {
  return !['1', '2', '3', '4'].includes(operation);
}

function prompt(message, variable) {
  if (variable === undefined) {
    console.log(`=> ${message}`);
  } else {
    console.log(`=> ${message} ${variable}`);
  }
}

function performOperation(number1, number2, operation) {
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
  return output;
}

function invalidResponse(playAgain) {
  let formatted = playAgain.trim().toLowerCase();
  if (defaultLanguage === 'fr') {
    return !['oui', 'non'].includes(formatted);
  } else {
    return !['yes', 'no'].includes(formatted);
  }

}

function invalidLanguageChoice(preferredLanguage) {
  return !['1', '2'].includes(preferredLanguage);
}

function setDefaultLanguage(preferredLanguage) {
  let idx = Number(preferredLanguage) - 1;
  defaultLanguage = LANGUAGES[idx];
}

function getInput() {
  return READLINE.question();
}

function getMessage(defaultLanguage, messageTitle) {
  return MESSAGES[defaultLanguage][messageTitle];
}

// MAIN _____________________________________________

prompt(getMessage(defaultLanguage, 'greeting'));

prompt(getMessage(defaultLanguage, 'chooseLanguage'));

let preferredLanguage = READLINE.question();

while (invalidLanguageChoice(preferredLanguage)) {
  prompt(getMessage(defaultLanguage), 'invalidLanguage');
  preferredLanguage = getInput();
}

setDefaultLanguage(preferredLanguage);

while (play) {

  prompt(getMessage(defaultLanguage, 'firstNumber'));
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(getMessage(defaultLanguage, 'invalidNumber'));
    number1 = getInput();
  }

  prompt(getMessage(defaultLanguage, 'secondNumber'));
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(getMessage(defaultLanguage,'invalidNumber'));
    number2 = getInput();
  }

  prompt(`${number1}, ${number2}`);

  prompt(getMessage(defaultLanguage, 'operation'));

  let operation = getInput();

  while (invalidOperation(operation)) {
    prompt(getMessage(defaultLanguage, 'invalidOperation'));
    operation = getInput();
  }

  let operationResult = performOperation(number1, number2, operation);

  prompt(getMessage(defaultLanguage, 'result'), operationResult);

  prompt(getMessage(defaultLanguage,'playAgain'));
  let playAgain = getInput();

  while (invalidResponse(playAgain)) {
    prompt(getMessage(defaultLanguage, 'invalidResponse'));
    playAgain = getInput();
  }

  if (playAgain === 'no' || playAgain === 'non') {
    play = false;
    prompt(getMessage(defaultLanguage, 'thankyou'));
  } else {
    console.clear();
  }
}
