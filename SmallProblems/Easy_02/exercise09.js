/* -------------PROBLEM DESCRIPTION---------------------
  # Build a program that randomly generates Teddy's age,
    and logs it to the console. Have the age be a random
    number between 20 and 120 (inclusive).

Example Output:
 Teddy is 69 years old!

------------------------------------------------------ */


// generate random number between 20 and 120


let random = Math.floor(Math.random() * (120 - 20 + 1)) + 20;

console.log(`Teddy is ${random} years old!`);

/* -----------------BOOK SOUTION------------------------

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let age = randomBetween(20, 120);
  console.log(`Teddy is ${age} years old!`);

------------------------------------------------------ */