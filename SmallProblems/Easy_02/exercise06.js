/*
  # Given: Write a function that returns the next to last
    word in the String passed to it as an argument.

    Words are any sequence of non-blank characters.

    You may assume that the input String will always contain 
    at least two words.



Problem -----------------------------------------
- Input: String 
- Output: String
- Details: 
  * return second to last string in sequence passed 
  * words = sequence of NON-BLANK characters 
  * assum always at least 2 words (min)

Examples ------------------------------------------
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

Data Structure: Array 

Algorithm: 
  - Given String of at least 2 words 

  - transform string of words into an array of words 
  
  - return the second to last item in the array 
  
*/


function penultimate(string) {
  let words = string.split(" ");  
  let lastWord = words[words.length - 2]; 
  return lastWord; 
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
