// Problem: a function that returns the sum of two numbers

/* CASUAL PSEUDOCODE -------------------------------

Given two numbers.

  - declare variable `sum` and initialize it to the result
  of performing an addition operation on the two input numbers
  - return `sum`


-------------------------------------------------- */

/* FORMAL PSEUDOCODE -------------------------------

  START

  # Given two numbers.

    SET sum = addition operation on the two input numbers

    PRINT sum

  END

-------------------------------------------------- */

function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(sum(2, 4)); // => 6
console.log(sum(10, 0)); // => 10
console.log(sum(2, -45)); // => -43