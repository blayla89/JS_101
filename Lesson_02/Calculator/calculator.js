// VARIABLES __________________________________________

const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const VALID_OPERATIONS = ['1', '2', '3', '4']; 
let defaultLanguage = 'en';
const LANGUAGES = ['en', 'fr'];
let play = true;

// FXNS _______________________________________________

function invalidNumber(number) {
  // checks if number IS an empty or whitespace string OR IS  NaN => returns boolean (true if number IS invalid)
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidOperation(operation) {
  // checks operation input -> returns true if it is NOT included in the string
  return !VALID_OPERATIONS.includes(operation);
}

function prompt(message, variable) {
  // checks if the variable is undefined, and if yes it outputs message as a string
  if (variable === undefined) {
    console.log(`=> ${message}`);
  // if the variable is not empty, then it outputs the a more complex message AND the variable 
  } else {
    console.log(`=> ${message} ${variable}`);
  }
}

function performOperation(number1, number2, operation) {
  // takes 3 inputs to perform operation and dynamicaly updates and returns the output based on the users operation choice
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

// TODO: FIX THIS FXN 
function invalidPlayAgain(playAgain) {
  // assigns playAgain to new variable called formatted, which formats it to all lowercase with white/blank space removed
  let formatted = playAgain.trim().toLowerCase();
  // if the default language is french, the it checks the user's formatted response if its NOT oui or non
  if (defaultLanguage === 'fr') {
    return !['oui', 'non'].includes(formatted);
  } else {
    // otherwise, check the user response to play again to see if it's 'yes' or 'no' 
    return !['yes', 'no'].includes(formatted);
  }
}

function invalidLanguageChoice(preferredLanguage) {
  // checks the user's preferred language choice and returns a boolean if it is NOT the strings '1' or '2'
  return !['1', '2'].includes(preferredLanguage);
}

function setDefaultLanguage(preferredLanguage) {
  // gets an index number based on the user's preferred language input to updated the default language
  let idx = Number(preferredLanguage) - 1;
  // updates the default language
  defaultLanguage = LANGUAGES[idx];
}

function getInput() {
  // gets input from the terminal and returns a String
  return READLINE.question();
}

function getMessage(defaultLanguage, messageTitle) {
  // gets the defaultLanguage and message title keys and returns the value of the property on the messages object
  return MESSAGES[defaultLanguage][messageTitle];
}

// MAIN _____________________________________________

prompt(getMessage(defaultLanguage, 'greeting')); // 

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

  while (invalidPlayAgain(playAgain)) {
    prompt(getMessage(defaultLanguage, 'invalidPlayAgain'));
    playAgain = getInput();
  }

  if (playAgain === 'no' || playAgain === 'non') {
    play = false;
    prompt(getMessage(defaultLanguage, 'thankyou'));
  } else {
    console.clear();
  }
}
