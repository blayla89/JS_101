/*
  PROBLEM:
    a function that determines the index of the 3rd
    occurrence of a given character in a string. For
    instance, if the given character is 'x' and the
    string is 'axbxcdxex', the function should return
    6 (the index of the 3rd 'x'). If the given character
    does not occur at least 3 times, return null.

*/


/* CASUAL PSEUDOCODE -------------------------------

Given a String and a searchCharacter.

  Declare `thirdIndex` and initialize it to null

  Declare count and initalize to the value 0.

  Iterate over each character of the string while count is
    - declare currentCharacter and initalize to the
    currentValue at position iterator within the String
    - if currentCharacter is the same as the searchCharacter
      - increment count by one
    - if count is equal to three, update `thirdIndex` to the
    index of `currentCharacter` and terminate the loop

  return thirdIndex

-------------------------------------------------- */

/* FORMAL PSEUDOCODE -------------------------------

START

# Given a String and a searchCharacter

SET thirdIndex = null
SET count = 0;
SET iterator = 0;

WHILE iterator < the length of the string input
  SET currentCharacter = the currentValue within the
  string
  IF count === 3
    - update thirdIndex to the index of the currentCharacter
    - terminate the loop
  ELSE
    - continue

  iterator = iterator + 1

PRINT thirdIndex

END

-------------------------------------------------- */

function indexOfThird(string, searchCharacter) {
  let count = 0;
  let thirdIndex = null;

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentCharacter = string[idx];
    if (currentCharacter === searchCharacter) {
      count += 1;
    }
    if (count === 3) {
      thirdIndex = idx;
      break;
    }
  }
  return thirdIndex;
}


console.log(indexOfThird('axbxcdxex', 'x')); // => 6
console.log(indexOfThird('axbxcde', 'x')); // => null
console.log(indexOfThird('aabacde', 'a')); // => 3