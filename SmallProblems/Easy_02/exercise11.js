/* -------------PROBLEM DESCRIPTION---------------------
  # Write a function that takes a non-empty string argument
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

function centerOf(str) {
  let length = str.length;
  if (length % 2 === 0) {
    let leftIdx = (length / 2) - 1;
    let rightIdx = length / 2;
    return str[leftIdx] + str[rightIdx];
  } else {
    let middleIdx = Math.floor(length / 2);
    return str[middleIdx];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"


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

