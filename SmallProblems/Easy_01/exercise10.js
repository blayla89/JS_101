/* -----------------------PROBLEM-DESCRIPTION-------------------------------

   Write a function that computes the sum of all numbers between 1
  and some other number, inclusive, that are multiples of 3 or 5.
  For instance, if the supplied number is 20, the result should be
  98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

  You may assume that the number passed in is an integer greater
  than 1.

  Examples:
    multisum(3);       // 3
    multisum(5);       // 8
    multisum(10);      // 33
    multisum(1000);    // 234168

---------------------------------------------------------------------------- */

// Version 1 ---------------------------------------

function multisum(num) {
  let sum = 0;

  for (let idx = 1; idx <= num; idx += 1) {
    if ((idx % 3 === 0) || (idx % 5 === 0)) {
      sum += idx;
    }
  }
  return sum;
}
console.log(`\nVersion 1:`);
console.log(multisum(3));  // 3
console.log(multisum(5));     // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

// Version 2 ---------------------------------------

function multisumV2(num) {
  let sum = 0;
  for (let count = num; count >= 1; count -= 1) {
    if ((count % 3 === 0) || count % 5 === 0) {
      sum += count;
    }
  }
  return sum;
}

console.log(`\nVersion 2:`);
console.log(multisumV2(3));  // 3
console.log(multisumV2(5));     // 8
console.log(multisumV2(10));      // 33
console.log(multisumV2(1000));    // 234168


// Version 3 ---------------------------------------

function isMultiple(number, divisor) {
  return number % divisor === 0;  // returns true or false
}

function multisumBookSolution(max) {

  let sum = 0;

  for (let number = 1; number <= max; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

console.log(`\nBook Solution:`);

console.log(multisumBookSolution(3));  // 3
console.log(multisumBookSolution(5));     // 8
console.log(multisumBookSolution(10));      // 33
console.log(multisumBookSolution(1000));    // 234168