// VARIABLES __________________________________________

const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const VALID_OPERATIONS = ['1', '2', '3', '4'];
let defaultLanguage = 'en';
const VALID_LANGUAGES = MESSAGES[defaultLanguage]['languages'];

// FXNS _______________________________________________

function prompt(message, variable) {
  if (variable === undefined) {
    console.log(`=> ${message}`);
  } else {
    console.log(`=> ${message} ${variable}`);
  }
}

function getMessage(defaultLanguage, messageTitle) {
  return MESSAGES[defaultLanguage][messageTitle];
}

function getInput() {
  return READLINE.question();
}

function formatInput(input) {
  return input.trim().toLowerCase();
}

function toProperCase(VALID_LANGUAGES) {
  return VALID_LANGUAGES.map((language) => {
    return language[0].toUpperCase() + language.slice(1);
  });
}

function invalidLanguageChoice(languageChoice) {
  return !VALID_LANGUAGES.includes(languageChoice);
}

function extractCharCode(languageChoice) {
  return languageChoice.slice(0,2);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidOperation(operation) {
  return !VALID_OPERATIONS.includes(operation);
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

function invalidPlayAgain(playAgain) {
  const VALID_PLAY_AGAIN_INPUT = MESSAGES[defaultLanguage]['validPlayAgainInput'];
  return !VALID_PLAY_AGAIN_INPUT.includes(playAgain);
}


// MAIN _____________________________________________

prompt(MESSAGES[defaultLanguage]['greeting']);

prompt(MESSAGES[defaultLanguage]['chooseLanguage'], toProperCase(VALID_LANGUAGES).join(', '));

let languageChoice = formatInput(getInput());


while (invalidLanguageChoice(languageChoice)) {
  prompt(MESSAGES[defaultLanguage]['invalidLanguage'], toProperCase(VALID_LANGUAGES).join(', '));
  languageChoice = formatInput(getInput());
  console.clear();
}

if (languageChoice !== 'english') {
  defaultLanguage = extractCharCode(languageChoice);
}

while (true) {

  prompt(getMessage(defaultLanguage, 'firstNumber'));

  let number1 = getInput();

  while (invalidNumber(number1)) {
    prompt(getMessage(defaultLanguage, 'invalidNumber'));
    number1 = getInput();
    console.clear();
  }

  prompt(getMessage(defaultLanguage, 'secondNumber'));
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(getMessage(defaultLanguage,'invalidNumber'));
    number2 = getInput();
    console.clear();
  }

  prompt(`${number1}, ${number2}`);

  prompt(getMessage(defaultLanguage, 'operation'));

  let operation = getInput();

  while (invalidOperation(operation)) {
    prompt(getMessage(defaultLanguage, 'invalidOperation'));
    operation = getInput();
    console.clear();
  }

  let operationResult = performOperation(number1, number2, operation);

  prompt(getMessage(defaultLanguage, 'result'), operationResult);

  prompt(getMessage(defaultLanguage,'playAgain'));

  let playAgain = formatInput(getInput());


  while (invalidPlayAgain(playAgain)) {
    prompt(getMessage(defaultLanguage, 'invalidPlayAgain'));
    playAgain = formatInput(getInput());
    console.clear();
  }

  if (playAgain !== MESSAGES[defaultLanguage]['validPlayAgainInput'][0]) {
    prompt(getMessage(defaultLanguage, 'thankyou'));
    break;
  }

  console.clear();

}
