/* -----------------------PROBLEM-DESCRIPTION-------------------------------

  # Write a function that takes two strings as arguments, determines the length
    of the two strings, and then returns the result of concatenating the shorter
    string, the longer string, and the shorter string once again. You may assume
    that the strings are of different lengths.

    Examples:
      shortLongShort('abc', 'defgh');    // "abcdefghabc"
      shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
      shortLongShort('', 'xyz');         // "xyz"

---------------------------------------------------------------------------- */

function shortLongShort(str1, str2) {

  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"


/* -------------------------BOOK-SOLUTION----------------------------------

  function shortLongShort(string1, string2) {
    if (string1.length > string2.length) {
      return string2 + string1 + string2;
    } else {
      return string1 + string2 + string1;
    }
  }
---------------------------------------------------------------------------- */
