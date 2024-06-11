/* -------------PROBLEM DESCRIPTION---------------------

  # Write a program that will ask for user's name. The
    program will then greet the user. If the user writes
    "name!" then the computer yells back to the user.

  Example:
    What is your name? Bob
    Hello Bob.

    What is your name? Bob!
    HELLO BOB. WHY ARE WE SCREAMING?

------------------------------------------------------ */
// Variables
const READLINE = require('readline-sync');

// FXNS
function prompt(message) {
  console.log(`=> ${message}`);
}

function getInput() {
  return READLINE.question();
}

function endsWithExclamationPoint(name) {
  return name[name.length - 1] === '!';
}

function displayGreeting(name) {
  if (endsWithExclamationPoint(name)) {
    name = name.slice(0, -1);
    prompt(`Hello ${name}. Why are we screaming?`.toUpperCase());
  } else {
    prompt(`Hello ${name}.`);
  }
}

// MAIN
prompt(`What is your name?`);

let name = getInput();

displayGreeting(name);

/* -----------------BOOK SOUTION------------------------

  let readlineSync = require("readline-sync");

  let name = readlineSync.question("What is your name? ");

  if (name[name.length - 1] === "!") {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }

------------------------------------------------------ */