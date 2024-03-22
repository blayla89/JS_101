/*
  # Log all even numbers from 1 to 99, inclusive, to the console,
    with each number on a separate line.

  Problem ----------------
    - Input: Number
    - Ouput: Number - only even values
    - Details:
      - range is inclusive (1-99)
      - log only even numbers for q line

  Examples ---------------
    - n/a

  Data Structure ---------
    - n/a

  Algorithm --------------

  - iterate over numbers from 1 through 99 inclusive
   - if the number can be divided by 2 with 0 remainder
    - log it to the console
    - otherwise, continue
*/

for (let idx = 1; idx <= 99; idx += 1) {
  if (idx % 2 === 0) {
    console.log(idx);
  } else {
    continue;
  }
}

// Book Solution---------------------------------
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }
  console.log(number);
}