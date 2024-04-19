/*
  PROBLEM: a function that takes an array of strings,
  and returns a string that is all those strings
  concatenated together
*/

/* CASUAL PSEUDOCODE -------------------------------

Given an array of strings.

Declare variable `result` and initialize to an empty string.
  - Iterate over the array of strings
    - declare `currentValue` and initalize to the current
    value of the iteration
    - add currentValue to `result`
    -continue until all array elements have been processed
  - return the `result`

-------------------------------------------------- */

/* FORMAL PSEUDOCODE -------------------------------

START

# Given an array of strings.

  SET result = ''
  SET iterator = 0

  WHILE iterator <= length of input array
    SET currentValue = currentValue within array collection
    currentValue += result

    iterator += 1

  PRINT result

END

-------------------------------------------------- */

function concatStrings(arr) {
  let result = '';

  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentValue = arr[idx];
    result += currentValue;
  }

  return result;
}

console.log(concatStrings(['I', ' ', 'love', ' ', 'you', '!'])); // => I love you!
console.log(concatStrings(['My', ' ', 'Precious!'])); // => My precious!
console.log(concatStrings(['Hi', 'Hi', 'Hi'])); // => HiHiHi
