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

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getInput(msg) {
  prompt(msg);
  return Number(READLINE.question());
}

function yearsLeftToRetirement(age, retirementAge) {
  return retirementAge - age;
}

function logRetirementMessage(years) {
  let today = new Date();
  let currentYear = today.getFullYear();
  prompt(`It's ${currentYear}. You will retire in ${currentYear + years}.
  You only have ${years} year of work left to go!`);
}

// MAIN ===================================================

let currentAge = getInput(`What is your age?`);
let idealRetirementAge = getInput(`At what age would you like to retire?`);
let yearsLeft = yearsLeftToRetirement(currentAge, idealRetirementAge);

logRetirementMessage(yearsLeft);


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