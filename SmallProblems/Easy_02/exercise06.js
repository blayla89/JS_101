/* -------------PROBLEM DESCRIPTION---------------------

  # Write a function that returns the next to last word
    in the String passed to it as an argument.

    Words are any sequence of non-blank characters.

    You may assume that the input String will always
    contain at least two words.

  Examples:
    console.log(penultimate("last word") === "last"); // logs true
    console.log(penultimate("Launch School is great!") === "is"); // logs true

------------------------------------------------------ */

function penultimate(str) {
  let arrOfWords = str.split(' ');
  return arrOfWords[arrOfWords.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/* -----------------BOOK SOUTION------------------------

  function penultimate(words) {
    let wordsArray = words.split(" ");
    return wordsArray[wordsArray.length - 2];
  };

------------------------------------------------------ */