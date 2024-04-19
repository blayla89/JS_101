/*
  PROBLEM:
    a method that takes an array of integers,
    and returns a new array with every other element
    from the original array, starting with the first
    element.

  Example:
    everyOther([1,4,7,2,5]); // => [1,7,5]

*/

/* CASUAL PSEUDOCODE -------------------------------

Given a collection of integers.

  Declare variable `everyOther` and initialize to
  an empty array.

  Iterate over the collection of integers for the length
  of the collection.
    - declare variable `currentValue` and set it
    equal to the current value within the collection
    - add `currentValue` to `everyOther`
    - increment the iterator by 2

  Return `everyOther`.


-------------------------------------------------- */

/* FORMAL PSEUDOCODE -------------------------------

START

# Given a collection of integers.

SET `everyOther` = []
SET iterator = 0

WHILE iterator < length of the collection of integers
  SET currentValue = the current value within the
  collection at space `iterator`
  currentValue += everyOther

  iterator = iterator += 2

PRINT everyOther

END

-------------------------------------------------- */

function everyOtherElement(arr) {
  let result = [];

  for (let idx = 0; idx < arr.length; idx += 2) {
    let currentValue = arr[idx];
    result.push(currentValue);
  }

  return result;
}


console.log(everyOtherElement([1, 3, 4, 5, 6, 7, 23])); // => [1, 4, 6, 23]
console.log(everyOtherElement([1,4,7,2,5]));  // => [1,7,5]