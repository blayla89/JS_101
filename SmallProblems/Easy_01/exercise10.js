/* ------------------------------------------------------------
   Write a function that computes the sum of all numbers
   between 1 and some other number, inclusive, that are
   multiples of 3 or 5. For instance, if the supplied
   number is 20, the result should be 98
   (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

  You may assume that the number passed in is an
  integer greater than 1.

  PROBLEM ----------------------------------
  - Input: Number (integer > 1)
  - Output: Number (integer representing sum of multiples)
  - Details:
    - sum of integers from 1 - n]
      - sum only numbers that are multiples of 3 or multiples of 5

  EXAMPLES ---------------------------------
    multisum(3); // 3
      // 3 -> 1 - 2 - **3** => 3

    multisum(5); // 8
      // 8
        // => 1, 2, **3**, 4, **5**
          // => 3 + 5
            // =>  8

    multisum(10);      // 33
       // 10
       // -> 1, 2, **3**, 4, **5**, **6**, 7, 8, **9**, **10**
       // 3 + 5 + 6 + 9 + 10
       //  => 33

    multisum(1000);    // 234168


  DATA STRUCTURE:

  ALGORITHM --------------------------------
  - write a fxn `multisum` that takes a `num` representing an integer > 0
  - SET `sum` to 0
  - iterate over the number from range [1 - `num`]
    - check IF the currentValue is a multiple of 3 or 5
      - if yes,then add current value to `sum`
      - if no, do nothing
  - return `sum`

-------------------------------------------------------- */

// MY SOLUTION ------------------------------------
/* function multisum(num) {
  let sum = 0;
  for (let idx = 1; idx <= num; idx += 1) {
    if ((idx % 3 === 0) || (idx % 5 === 0)) {
      sum += idx;
    }
  }
  console.log(sum);
  return sum;
} */

// BOOK Solution----------------------------------
function isMultiple (number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number,3) || isMultiple(number, 5)) {
      sum += number;
    }
  }
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

/* -------------- KEY DIFFERENCES ----------------------
    1. defines helper fxn : isMuliple(number, divisor)
      - extracts logic for determining whether or not
      `number` input is a multiple of a given `divisor`
      - returns true if the `number` is a a multiple
      of the `divisor` or false otherwise
    2. condition of the IF contains 2 callbacks fxns,
    which are sub-expressions of logical Or
      - if EITHER one returns true, then `sum`
       is incremented by the current `number`
 ------------------------------------------------------ */


