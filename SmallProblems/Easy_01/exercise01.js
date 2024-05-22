/* ------------------PROBLEM-DESCRIPTION-----------------------

Write a function that takes one integer argument, which may be
positive, negative, or zero. This method returns true if the
number's absolute value is odd. You may assume that the argument
is a valid integer value.


-------------------------------------------------------------- */

// version 1
function isOddV1(integer) {
  return Math.abs(integer) % 2 === 1;
}
console.log(`\nVersion 1:`);
console.log(isOddV1(2)); // => false
console.log(isOddV1(5)); // => true
console.log(isOddV1(-17)); // => true
console.log(isOddV1(-8)); // => false
console.log(isOddV1(0)); // => false
console.log(isOddV1(7)); // => true


// version 2
function isOddV2(integer) {
  return Math.abs(integer) % 2 !== 0;
}

console.log(`\nVersion 2:`);
console.log(isOddV2(2)); // => false
console.log(isOddV2(5)); // => true
console.log(isOddV2(-17)); // => true
console.log(isOddV2(-8)); // => false
console.log(isOddV2(0)); // => false
console.log(isOddV2(7)); // => true

// version 3

function isOddV3(integer) {
  return integer % 2 === 1 || integer % 2 === -1;
}


console.log(`\nVersion 3:`);
console.log(isOddV3(2)); // => false
console.log(isOddV3(5)); // => true
console.log(isOddV3(-17)); // => true
console.log(isOddV3(-8)); // => false
console.log(isOddV3(0)); // => false
console.log(isOddV3(7)); // => true


/* --------------------BOOK-SOLUTION----------------------------

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

-------------------------------------------------------------- */
