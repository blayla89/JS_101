/* -------------PROBLEM DESCRIPTION---------------------

  The || operator returns a truthy value if either or
  both of its operands are truthy, a falsey value if both
  operands are falsey. The && operator returns a truthy value
  if both of its operands are truthy, and a falsey value if
  either operand is falsey. This works great until you need
  only one, but not both, of two conditions to be truthy:
  the so-called exclusive or.

  In this exercise, you will write a function named xor that
  takes two arguments, and returns true if exactly one of its
  arguments is truthy, false otherwise. Note that we are looking
  for a boolean result instead of a truthy/falsy value as returned
  by || and &&.

  Examples:
    console.log(xor(5, 0) === true);          // true
    console.log(xor(false, true) === true);   // true
    console.log(xor(1, 1) === false);         // true
    console.log(xor(true, true) === false);   // true
    console.log(xor(0, false) === false);     // true
    console.log(xor(0, 0) === false);         // true

------------------------------------------------------ */

// Version 1 ========================================

console.log(`\n Version 1: If conditon + explicit return boolean`);

function xor(num1, num2) {
  if ((num1 && !num2) || (!num1 && num2)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true

// Version 2 ========================================

console.log(`\n Version 2: Local variable delcaration & return init to ternary expression that inits the local variable to the boolean based on the result of the ternary conditions evaluation `);

function xorV2(num1, num2) {
  let result = !!((num1 && !num2) || (!num1 && num2));
  return result;
}

console.log(xorV2(5, 0) === true);          // true
console.log(xorV2(false, true) === true);   // true
console.log(xorV2(1, 1) === false);         // true
console.log(xorV2(true, true) === false);   // true
console.log(xorV2(0, false) === false);     // true
console.log(xorV2(0, 0) === false);         // true


// Version 3 ========================================

console.log(`\n Version 3 : return result of logical expression explicitly coerced to boolean using Boolean() constructor fxn`);
function xorV3(num1, num2) {
  return Boolean((num1 && !num2) || (!num1 && num2));
}

console.log(xorV3(5, 0) === true);          // true
console.log(xorV3(false, true) === true);   // true
console.log(xorV3(1, 1) === false);         // true
console.log(xorV3(true, true) === false);   // true
console.log(xorV3(0, false) === false);     // true
console.log(xorV3(0, 0) === false);         // true


// Version 4 ========================================
console.log(`\n Version 4 : return result of logical expression explicitly coerced to boolean by chainging the logical ! operator constructor fxn`);

function xorV4(num1, num2) {
  return !!((num1 && !num2) || (!num1 && num2));
}

console.log(xorV4(5, 0) === true);          // true
console.log(xorV4(false, true) === true);   // true
console.log(xorV4(1, 1) === false);         // true
console.log(xorV4(true, true) === false);   // true
console.log(xorV4(0, false) === false);     // true
console.log(xorV4(0, 0) === false);         // true


/* -----------------BOOK SOUTION------------------------

  function xor(value1, value2) {
    if ((value1 && !value2) || (value2 && !value1)) {
      return true;
    }
    return false;
  }

  function xor(value1, value2) {
    return Boolean((value1 && !value2) || (value2 && !value1));
  }

------------------------------------------------------ */