/* -----------------------PROBLEM-DESCRIPTION-----------------------------

  Write a function that takes two strings as arguments, determines the length
  of the two strings, and then returns the result of concatenating the shorter
  string, the longer string, and the shorter string once again. You may assume
  that the strings are of different lengths.

    Examples:
      shortLongShort('abc', 'defgh');    // "abcdefghabc"
      shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
      shortLongShort('', 'xyz');         // "xyz"

-------------------------------------------------------------------------- */

// Version 1 ---------------------------------------

function shortLongShort(str1, str2) {
  let str = str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
  return str;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

// Version 2 ---------------------------------------

function shortLongShortV2(str1, str2) {
  let mergedStr = '';
  if (str1.length < str2.length) {
    mergedStr = str1 + str2 + str1;
  } else {
    mergedStr = str2 + str1 + str2;
  }
  return mergedStr;
}

shortLongShortV2('abc', 'defgh');    // "abcdefghabc"
shortLongShortV2('abcde', 'fgh');    // "fghabcdefgh"
shortLongShortV2('', 'xyz');         // "xyz"


/* -------------------------BOOK-SOLUTION--------------------------------

  function shortLongShort(string1, string2) {
    if (string1.length > string2.length) {
      return string2 + string1 + string2;
    } else {
      return string1 + string2 + string1;
    }
  }
-------------------------------------------------------------------------- */


