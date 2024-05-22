/* ------------------PROBLEM-DESCRIPTION-----------------------

  # Log all odd numbers from 1 to 99, inclusive, to the console,
    with each number on a separate line.

-------------------------------------------------------------- */

// Version 1
console.log(`\nVersion 1:`);

for (let idx = 1; idx < 100; idx += 2) {
  console.log(idx);
}

// Version 2
console.log(`\nVersion 2:`);
for (let idx = 1; idx < 100; idx += 1) {
  if (idx % 2 === 1) {
    console.log(idx);
  }
}

// Version 3
console.log(`\nVersion 3:`);
for (let idx = 1; idx <= 99; idx += 1) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);
}

/* ------------------BOOK-SOLUTION-----------------------

  for (let number = 1; number < 100; number += 2) {
    console.log(number);
  }

-------------------------------------------------------------- */
