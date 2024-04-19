/*
  # Problem: Build a program that randomly generates Teddy's age,
    and logs it to the console. Have the age be a random number
    between 20 and 120 (inclusive).

  Problem ----------------------------------------------------
  - Input: 2 Numbers
  - Output: String (including Number)
  - Details:
    * return string containing random number between 20 & 120 inclusive

  Examples ---------------------------------------------------

  Teddy is 69 years old!

  Data Structure: n/a

  Algorithm:

  - generate random number between input number1 and input
   number2 inclusive to represent a random age
  - return a String indicating a dynamic random age of a user

*/

function getRandomAge(min, max) {
  return Math.floor(Math.random() * ((max - min + 1) + min));
}

let age = getRandomAge(20, 120);
console.log(`Teddy is ${age} years old!`);

