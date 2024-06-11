/* -------------PROBLEM DESCRIPTION---------------------
  # Build a program that logs when the user will retire
    and how many more years the user has to work until
    retirement.

  Example:

    What is your age? 30
    At what age would you like to retire? 70

    It's 2017. You will retire in 2057.
    You have only 40 years of work to go!

------------------------------------------------------ */

const READLINE = require('readline-sync');

let today = new Date();
let currentYear = today.getFullYear();

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function calculateYearsLeftTilRetirement(currentAge, retirementAge) {
  return retirementAge - currentAge;
}

function calcaulateRetireMentYear(currentYear, yearsLeft) {
  return currentYear + yearsLeft;
}

// MAIN ----------------------------------------------------------

prompt(`What is your age?`);
let currentAge = Number(READLINE.question());


prompt(`At what age would you like to retire?`);
let retirementAge = Number(READLINE.question());

let yearsLeft = calculateYearsLeftTilRetirement(currentAge, retirementAge);
let retirementYear = calcaulateRetireMentYear(currentYear, yearsLeft);


prompt(`It's ${currentYear}. You will retire in ${retirementYear}.
You only have ${yearsLeft} years of work to go!`);


/* -----------------BOOK SOUTION------------------------

let readlineSync = require("readline-sync");

let currentAge = Number(readlineSync.question("What is your age?\n"));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire?\n")
);

let today = new Date();

let currentYear = today.getFullYear();

let workYearsToGo = retirementAge - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);

------------------------------------------------------ */