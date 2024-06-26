/* -----------------------PROBLEM-DESCRIPTION-------------------------------

  In the modern era under the Gregorian Calendar, leap years occur in
  every year that is evenly divisible by 4, unless the year is also
  divisible by 100. If the year is evenly divisible by 100, then it
  is not a leap year, unless the year is also evenly divisible by 400.

  Assume this rule is valid for any year greater than year 0. Write a
  function that takes any year greater than 0 as input and returns true
  if the year is a leap year, or false if it is not a leap year.

---------------------------------------------------------------------------- */

// Version 1 ---------------------------------------------------------

function isLeapYear(year) {

  let isDivisibleBy400 = year % 400 === 0;

  let isDivisibleBy4 = year % 4 === 0;

  let isDivisbleBy100 = year % 100 === 0;

  let leapYear = isDivisibleBy400 || (isDivisibleBy4 && !isDivisbleBy100);

  console.log(leapYear);
  return leapYear;

}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

// Version 2 -------------------------------------------------------

function isLeapYearV2(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

isLeapYearV2(2016);      // true
isLeapYearV2(2015);      // false
isLeapYearV2(2100);      // false
isLeapYearV2(2400);      // true
isLeapYearV2(240000);    // true
isLeapYearV2(240001);    // false
isLeapYearV2(2000);      // true
isLeapYearV2(1900);      // false
isLeapYearV2(1752);      // true
isLeapYearV2(1700);      // false
isLeapYearV2(1);         // false
isLeapYearV2(100);       // false
isLeapYearV2(400);       // true


/* -------------------------BOOK-SOLUTION----------------------------------

  function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  }

  ======== OR =============

  function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }
---------------------------------------------------------------------------- */


