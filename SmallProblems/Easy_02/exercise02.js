/* -------------PROBLEM DESCRIPTION---------------------

  Write a program that will ask for user's name. The
  program will then greet the user. If the user writes
  "name!" then the computer yells back to the user.

  Example:
    What is your name? Bob
    Hello Bob.

    What is your name? Bob!
    HELLO BOB. WHY ARE WE SCREAMING?

------------------------------------------------------ */

const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getName(msg) {
  prompt(msg);
  return READLINE.question();


}
function greetUser(msg) {
  let name = getName(msg);
  let greeting = `Hello, ${name}.`;

  // Version 1 ============================

  if (name.endsWith('!')) {
    greeting = `Hello, ${name.slice(0, name.length - 1)}. Why are we screaming?`.toUpperCase();
  }

  // Version2 =============================

  /* if (name[name.length - 1] === '!') {
    greeting =
      `Hello, ${name.substring(0, name.length)}.
        Why are we screaming?`.toUpperCase();
    }
 */

  // Version3 =============================

  /*   if (name.indexOf('!', name.length -1) > 0) {
      greeting =
        `Hello, ${name.substring(0, name.length - 1)}.
          Why are we screaming?`.toUpperCase();
    }
 */
  prompt(greeting);

}


// MAIN ---------------------------

greetUser(`What is your name?`);


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