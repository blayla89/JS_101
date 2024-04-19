/*
  # Problem: 
    Write a function that takes a non-empty string argument 
    and returns the middle character(s) of the string. If
    the string has an odd length, you should return exactly
    one character. If the string has an even length, you 
    should return exactly two characters.

  Problem -----------------------------------------------
  -Input: String (non-empty)
  -Output: String (middle chars of input String)
  -Details: 
    * if input string has odd length => return 1 char; 
      Otherwise, return 2 chars 

  Example -----------------------------------------------

  centerOf('I Love JavaScript'); // "a"
  centerOf('Launch School');     // " "
  centerOf('Launch');            // "un"
  centerOf('Launchschool');      // "hs"
  centerOf('x');                 // "x"

  Data Structure: n/a 

  Algorithm: 
    - GIVEN a non-empty sequence of characters (String)

    - check if the string is odd or even 
      - find the length of the string 
        - find the remainder between the length of the string and the integer 2 
          - the string is odd if it is strictly equal to 1
            - otherwise, it is even 
  - if the string is odd, return ONLY middle character 
    - determine the middle character by dividing the length by 2 
      - use the result rounded down as the index to access the character at that position 
      - return the character 
  - if the string is even, return the 2 middle characters 
    - determine the lower and upper boundaries of the 2 middlemost chracters 
      - find the `lowerBoundary` by dividing the length of the input string by 2 and rounding down to the nearest integer
      - find the `upperBoundary` by dividing the length of the input string by 2 and rounding up to the nearest integer
      - use both the lower and upper boundarys as index positions to access the characters at that location in the String 
    
*/


function centerOf(string) {
  if (string.length % 2 === 1) {
    let index = Math.floor(string.length / 2); 
    return string[index]; 
  } else {
    let minIndex = (string.length / 2) - 1; 
    let maxIndex = string.length / 2; 
    return string.substring(minIndex, maxIndex)
  }
} 

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
