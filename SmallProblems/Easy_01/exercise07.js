/*
  # Given : Write a function that takes two strings as arguments,
    determines the length of the two strings, and then returns the
    result of concatenating the shorter string, the longer string,
    and the shorter string once again. You may assume that the
    strings are of different lengths.

PROBLEM ---------------------
- Input: String (2 strings of different lengths)
- Ouput: String (result of concatenation)
- Details:
  - assume strings different lengths
  - pattern = Short + Long + Short
    - if input is empty string, just return the longer one
  - return the concatenated string


EXAMPLES---------------------

  shortLongShort('abc', 'defgh');    // "abcdefghabc"
  shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
  shortLongShort('', 'xyz');         // "xyz"

INTERMISSION-----------------

  'abc', 'defgh' -> **3**, 5 -> 'abc' + 'defgh' + 'abc' => "abcdefghabc"

  '', 'xyz' -> 0, **'xyz'** => 'xyz'

DATA STRUCTURE---------------
- n/a


ALGORITHM--------------------
- GET strings from user (string1, string2)
  - compare the lengths of the input strings
    - SET 'short' to the shorter string
    - SET 'long' to the longer string
  - return `short` + `long` + `short`
*/


// My solution -------------------------------

/* function shortLongShort(string1, string2) {
  let long;
  let short;
    if (string1.length > string2.length){
      long = string1;
      short = string2;
    } else if (string1.length < string2.length){
      long = string2;
      short = string1;
    }
  return short + long + short;
}
*/

/* function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
} */
