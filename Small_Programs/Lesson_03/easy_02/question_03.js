/* =========================================================

  QUESTION 3: Given a number and an array, determine whether
  the number is included in the array.

========================================================== */

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true


// SOLUTIONS =============================================

// PERSONAL ----------------------------------------------

// Strategy 1: Array.prototype.includes()
function isIncludedV1(number, numbers) {
  return numbers.includes(number);
}

isIncludedV1(number1, numbers); // => false
isIncludedV1(number2, numbers); // => true


// Strategy 2: for loop
function isIncludedV2(number, numbers) {
  let result = false;
  for (let idx = 0; idx < numbers.length; idx += 1) {
    if (numbers[idx] === number) {
      result = true;
    }
  }
  return result;
}

isIncludedV2(number1, numbers); // false
isIncludedV2(number2, numbers); // true


// BOOK ---------------------------------------------------

numbers.includes(number1); // => false
numbers.includes(number2); // => true

