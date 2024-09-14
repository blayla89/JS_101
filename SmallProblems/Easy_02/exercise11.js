/* -------------PROBLEM DESCRIPTION---------------------

  Write a function that takes a non-empty string argument
  and returns the middle character(s) of the string. If
  the string has an odd length, you should return exactly
  one character. If the string has an even length, you
  should return exactly two characters.

Example Output:
  centerOf('I Love JavaScript'); // "a"
  centerOf('Launch School');     // " "
  centerOf('Launch');            // "un"
  centerOf('Launchschool');      // "hs"
  centerOf('x');                 // "x"

------------------------------------------------------ */

// Version 1 =========================================

console.log(`\nVersion 1 -------------------------`);

function centerOf(str) {
  let average = (str.length) / 2;
  if (!Number.isInteger(average)) {
    return str[Math.floor(average)];
  } else {
    return str[average - 1] + str[average];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"  // odd
console.log(centerOf('Launch School'));     // " "  // even
console.log(centerOf('Launch'));            // "un" // even
console.log(centerOf('Launchschool'));      // "hs" // even
console.log(centerOf('x'));                 // "x"  // odd


// Version 2  =========================================

console.log(`\nVersion 2 -------------------------`);

function centerOfV2(str) {
  let average = (str.length) / 2;
  let center = (Number.isInteger(average)) ?
    (str[average - 1] + str[average]) : (str[Math.floor(average)]);
  return center;

}

console.log(centerOfV2('I Love JavaScript')); // "a"  // odd
console.log(centerOfV2('Launch School'));     // " "  // even
console.log(centerOfV2('Launch'));            // "un" // even
console.log(centerOfV2('Launchschool'));      // "hs" // even
console.log(centerOfV2('x'));                 // "x"  // odd


/* -----------------BOOK SOUTION------------------------

  function centerOf(string) {
    if (string.length % 2 === 1) {
      let centerIndex = (string.length - 1) / 2;
      return string[centerIndex];
    } else {
      let leftIndex = string.length / 2 - 1;
      return string.substring(leftIndex, leftIndex + 2);
    }
  }

------------------------------------------------------ */

