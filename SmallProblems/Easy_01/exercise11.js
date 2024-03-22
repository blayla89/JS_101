/*
  # Problem:
    Write a function that determines and returns the
    UTF-16 string value of a string passed in as an
    argument. The UTF-16 string value is the sum of
    the UTF-16 values of every character in the
    string. (You may use String.prototype.charCodeAt()
    to determine the UTF-16 value of a character.)

  Problem -----------------------------
  - Input: String
  - Output: Number
  - Details:
    - UTF-16 value - sum of the the UTF-16 values of EVERY
    character in the string
    - String.prototype.charCodeAt()

  Examples-----------------------------

    utf16Value('Four score');         // 984
    utf16Value('Launch School');      // 1251
    utf16Value('a');                  // 97
    utf16Value('');                   // 0

    // The next three lines demonstrate that the code
    // works with non-ASCII characters from the UTF-16
    // character set.

    const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
    utf16Value(OMEGA);                  // 937
    utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

  Data Structure: Array

  Algorithm:
  - declare variable `sentence` to hold the input string
  - declare variable `sum` to hold the result of summing all the
  UTF-16 values for each char in the input string argument
  - iterate over the every character of the sentence
    - determine the utf16 value of every character
      - add the result to `sum`
  - return `sum`

START

  - SET `sum` = 0
  - SET `sentence` = input string

  - SET iterator = 0
  - WHILE iterator < length of the string
    - SET `index` = iterator
    - SET value = sentence.charCodeAt(index)
    - `sum` += value'
  - iterator += 1
  -PRINT `sum`


END

*/

function utf16Value(string) {
  let sentence = string;
  let sum = 0;
  for (let idx = 0; idx < sentence.length; idx += 1) {
    let value = sentence.charCodeAt(idx);
    sum += value;
  }
  return sum;
}


console.log(utf16Value('Four score')); // 984
console.log(utf16Value('Launch School')); // 1251
console.log(utf16Value('a')); // 97
utf16Value(''); // 0

/* ------------- BOOK SOLUTION ------------------

function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}

---------------------------------------------- */