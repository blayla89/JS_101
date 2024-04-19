/*
  The || operator returns a truthy value if either or
  both of its operands are truthy, a falsey value if
  both operands are falsey. The && operator returns a
  truthy value if both of its operands are truthy, and
  a falsey value if either operand is falsey. This works
  great until you need only one, but not both, of two
  conditions to be truthy: the so-called exclusive or.

  In this exercise, you will write a function named xor
  that takes two arguments, and returns true if exactly one
  of its arguments is truthy, false otherwise. Note that we
  are looking for a boolean result instead of a truthy/falsy
  value as returned by || and &&.

Problem -------------------------------------------

- Input: any value
- Output: Boolean
- details:
  - determine if only ONE argument is truthy and return a boolean

Examples --------------------------------------------
  console.log(xor(5, 0) === true);          // true
  console.log(xor(false, true) === true);   // true
  console.log(xor(1, 1) === false);         // true
  console.log(xor(true, true) === false);   // true
  console.log(xor(0, false) === false);     // true
  console.log(xor(0, 0) === false);         // true

  - only one true
    - || returns truthy value if one operand is true

      - true || true

      - false || false

      - ** true || false **

      - ** false || true **


5, 0 =>  num1 === true && num2 === false || num1 === false && num2 === true


- Given any data type
- check if the first number is true and the second number is false
  - if yes, return true
  - otherwise, return false
- check if the first number is false and the second number is true
  - if yes, return true
  - otherwise, return false
*/

function xor(num1, num2) {
  if ((num1 && !num2) || (!num1 && num2)) {
    return true;
  }
  return false;

}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true
