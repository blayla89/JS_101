/* ------------------PROBLEM-DESCRIPTION-----------------------

  # Log all odd numbers from 1 to 99, inclusive, to the console,
    with each number on a separate line.

-------------------------------------------------------------- */


// Version 1 ---------------------------------

console.log('\nVersion 1:');

for (let count = 1; count < 100; count += 2) {
  console.log(count);
}

// Version 2 ---------------------------------

console.log('\nVersion 2:');

let count = 1;

while (count <= 100) {
  console.log(count);
  count += 2;
}

// Version 3 ---------------------------------

console.log('\n Version 3:');

let num = 1;
do {
  console.log(num);
  num += 2;

} while (num <= 99);

// Version 4 ---------------------------------

console.log('\nVersion 4:');

for (let idx = 0; idx < 100; idx += 1) {
  if (idx % 2 === 0) {
    continue;
  }

  console.log(idx);
}


// Version 5 ---------------------------------

console.log('\nVersion 5:');
for (let idx = 0; idx < 100; idx += 1) {
  if (idx % 2 !== 0) {
    console.log(idx);
  }

}

/* ------------------BOOK-SOLUTION-----------------------

  for (let number = 1; number < 100; number += 2) {
    console.log(number);
  }

-------------------------------------------------------------- */


