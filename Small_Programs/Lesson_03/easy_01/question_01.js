/* =========================================================

Question 1: Will this code below raise an error?

  let numbers = [1, 2, 3];
  numbers[6] = 5;

  Bonus:

  let numbers = [1, 2, 3];
  numbers[6] = 5;
  numbers[4];  // what will this line return?

========================================================== */

let numbers = [1, 2, 3];
numbers[6] = 5;

//numbers[4];


/* =========================================================

Solution:

  No, it won't raise an error. It will add an element at index
  3 - 5 with empty slots.

  The result is a sparse array : [1, 2, < 3 empty items >, 5].

  BONUS QUESTION: numbers[4] will return undefined

========================================================== */
