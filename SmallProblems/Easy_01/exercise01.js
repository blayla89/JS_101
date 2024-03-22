/*
  # Write a function that takes one integer argument, which may be positive,
   negative, or zero.This method returns true if the number's absolute value
   is odd. You may assume that the argument is a valid integer value.

  Problem ---------------
    - Input: Number - an integer that's +, -, or 0
    - Ouput: Boolean - true if 'odd', false otherwise
    - Details:
      - assume input is valid integer
      - What constitutes an odd number?
        - any number divided by 2 with remainder 1 or -1


  Examples --------------
    console.log(isOdd(2)); // => false
      2 -> 2 % 2 === 1 => false
    console.log(isOdd(5)); // => true
      5 -> 5 % 2 === 1 => true
    console.log(isOdd(-17)); // => true
      -17 -> -17 % 2 === -1 => true
    console.log(isOdd(-8)); // => false
      -8 -> - 8 % 2 === -1 => false
    console.log(isOdd(0)); // => false
      0 -> 0 % 2 === 1 => false
    console.log(isOdd(7)); // => true
      7 -> 7 % 2 === 1 => true

  Intermission ----------

      + / + = +
        - / - = +
          - / + = -
            + / - = -

  Data Structure --------
  - n/a

  -17 -> -17 % 2 === 1 || -17 % 2 === -1 => true

  Algorithm -------------
  - Given an integer that is positive, negative or zero

  - declare `isOdd` that takes `int`
  - perform operation :
    - divide `int` by 2
    - check if the remainder is equal to 1 or -1
    - return result

*/

/* function isOdd(int) {
  return int % 2 === 1 || int % 2 === -1;
} */

function isOdd(int) {
  return Math.abs(int) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true