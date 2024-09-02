/* ------------------PROBLEM-DESCRIPTION-----------------------

Write a function that takes one integer argument, which may be
positive, negative, or zero. This method returns true if the
number's absolute value is odd. You may assume that the argument
is a valid integer value.


-------------------------------------------------------------- */

// Version 1
function isOddV1(int) {
  return Math.abs(int) % 2 === 1;
}
console.log(`\nVersion 1:`);
console.log(isOddV1(2)); // => false
console.log(isOddV1(5)); // => true
console.log(isOddV1(-17)); // => true
console.log(isOddV1(-8)); // => false
console.log(isOddV1(0)); // => false
console.log(isOddV1(7)); // => true


// Version 2
function isOddV2(int) {
  int = Math.sign(int) === -1 ? int * -1 : int;
  return int % 2 === 1;
}

console.log(`\nVersion 2:`);
console.log(isOddV2(2)); // => false
console.log(isOddV2(5)); // => true
console.log(isOddV2(-17)); // => true
console.log(isOddV2(-8)); // => false
console.log(isOddV2(0)); // => false
console.log(isOddV2(7)); // => true

// Version 3

function isOddV3(int) {
  return int % 2 === 1 || int % 2 === -1;
}


console.log(`\nVersion 3:`);
console.log(isOddV3(2)); // => false
console.log(isOddV3(5)); // => true
console.log(isOddV3(-17)); // => true
console.log(isOddV3(-8)); // => false
console.log(isOddV3(0)); // => false
console.log(isOddV3(7)); // => true

function isOddV4(int) {
  if (int < 0) int *= -1;
  return int % 2 === 1;
}

console.log(`\nVersion 4:`);
console.log(isOddV4(2)); // => false
console.log(isOddV4(5)); // => true
console.log(isOddV4(-17)); // => true
console.log(isOddV4(-8)); // => false
console.log(isOddV4(0)); // => false
console.log(isOddV4(7)); // => true


/* --------------------BOOK-SOLUTION----------------------------

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

-------------------------------------------------------------- */
