/* =========================================================

Question 3: Alan wrote the following function, which was
intended to return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

Alyssa noticed that this code would fail when the input is
0 or a negative number, and asked Alan to change the loop.
How can he make this work without using a do/while loop?
Note that we're not looking to find the factors for 0 or
negative numbers, but we want to handle it gracefully instead
of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that
code?


========================================================== */


// Solutions =====================================================

// Personal ------------------------------------------------------

function factors(number) {
  let factors = [];

  if (number <= 0) { // adds guard clause to handle more elegantly
    console.log(`Error: please enter a number greater than 0.`);
  }

  for (let divisor = number; divisor > 0; divisor -= 1) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }

  }
  return factors;
}

console.log(factors(10));
console.log(factors(0));
console.log(factors(-32));

/*
  number % divisor === 0 is checking if a divisor is a factor.
  A factor is a whole number that is evenly divisible into another
  number, which is what that bit of code does - checks if it is evenly
  divisible or not and consequently a whole number.
*/

// Book -----------------------------------------------------------

/* while (divisor > 0) {
  if (number % divisor === 0) {
    factors.push(number / divisor);
  }
  divisor -= 1;
} */

/*
  Bonus Answer:

  It determines whether the result of the division is an integer --
  if the number has no remainder, the result is an integer, so the
  number divided by the divisor is a factor.
*/
