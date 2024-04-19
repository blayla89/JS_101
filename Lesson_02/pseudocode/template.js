/* CASUAL PSEUDOCODE -------------------------------

  Given a collection of numbers.

  Iterate through the collection one-by-one.

  - save the first value as the starting value.
  - for each iteration, compare the saved value
  with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value is smaller or equal
    - move to the next value in the collection

  After iterating through the entire collection, return
  the saved value.

-------------------------------------------------- */

/* FORMAL PSEUDOCODE -------------------------------

START

  # Given a collection of integers called `numbers`

  SET iterator = 1
  SET savedNumber = value within numbers collection
  at space 1

  WHILE iterator <= length of numbers
    SET currentNumber = value within numbers collection
    at space `iterator`
    IF currentNumber > savedNumber
      savedNumber = currentNumber
    ELSE
      do nothing

    iterator = iterator + 1

  PRINT savedNumber

END
-------------------------------------------------- */

function findGreatest(numbers) {
  let savedNumber = numbers[0];

  for (let idx = 0; idx <= numbers.length; idx += 1) {
    let currentNumber = numbers[idx];
    if (currentNumber > savedNumber) {
      savedNumber = currentNumber;
    }
  }
  return savedNumber;

}

console.log(findGreatest([1, 3, 4, 5, 6])); // => 6
console.log(findGreatest([23, 334, 4, 54, 7])); // => 334
console.log(findGreatest([34, 3, 867, 65, 72])); // => 867

