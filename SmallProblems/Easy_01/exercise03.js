/* -----------------------PROBLEM-DESCRIPTION-------------------------------

# Log all even numbers from 1 to 99, inclusive, to the console,
    with each number on a separate line.

---------------------------------------------------------------------------- */

// Version 1

console.log(`\nVersion 1:`);

for (let num = 1; num < 99; num += 1) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// Version 2
console.log(`\nVersion 2:`);

for (let num = 2; num < 99; num += 2) {
  console.log(num);

}

// Version 3

console.log(`\nVersion 3:`);

for (let num = 1; num < 99; num += 1) {
  if (num % 2 !== 0) {
    continue;
  }
  console.log(num);
}

/* -------------------------BOOK-SOLUTION----------------------------------

  for (let number = 1; number < 100; number += 1) {
    if (number % 2 === 1) {
      continue;
    }

    console.log(number);
  }
---------------------------------------------------------------------------- */