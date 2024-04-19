/*
  # Problem: Build a program that logs when the user will retire
    and how many more years the user has to work until
    retirement.

Problem ----------------------------------------------
- Input: String
- Output: String


Examples ----------------------------------------------
  What is your age? 30
  At what age would you like to retire? 70

  It's 2017. You will retire in 2057.
  You have only 40 years of work to go!


Data Structure: n/a

Algorithm:
  - GET the user's current age and init to input value
  - GET the user's desired retirment age and init to input value
  - SET yearsLeft to work the result of subtracting current age from retirement
    - coerce to Number
  - return String including the current year, the year they will
  retire in and how many years they have left

*/

let rlSync = require('readline-sync');

console.log(`What is your age?`);
let currentAge = rlSync.question();

console.log(`At what age would you like to retire?`);
let ageToRetire = rlSync.question();

let yearsLeft = Number(ageToRetire) - Number(currentAge);

let currentDate = new Date();

console.log(currentDate.getFullYear());

console.log(`It's ${currentDate.getFullYear()}. You will retire in
${currentDate.getFullYear() + yearsLeft}.\nYou only have ${yearsLeft} years to go.`);

