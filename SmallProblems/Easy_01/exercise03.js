/* -----------------------PROBLEM-DESCRIPTION-------------------------------

# Log all even numbers from 1 to 99, inclusive, to the console,
    with each number on a separate line.

---------------------------------------------------------------------------- */

// Version 1 ---------------------------

console.log('\nVersion 1: ');

for (let idx = 0; idx < 99; idx += 2) {
  console.log(idx);
}

// Version 2 ---------------------------

console.log('\nVersion 2: ');

for (let idx = 0; idx < 99; idx += 1) {
  if (idx % 2 === 1) continue;
  console.log(idx);
}

// Version 3 ---------------------------

console.log('\nVersion 3: ');

let count = 0;

while (count < 100) {
  console.log(count);
  count += 2;
}

// Version 4 ---------------------------

console.log('\nVersion 4: ');

let num = 0;

do {
  console.log(num);
  num += 2;
} while (num < 100);

/* -------------------------BOOK-SOLUTION----------------------------------

  for (let number = 1; number < 100; number += 1) {
    if (number % 2 === 1) {
      continue;
    }

    console.log(number);
  }
---------------------------------------------------------------------------- */