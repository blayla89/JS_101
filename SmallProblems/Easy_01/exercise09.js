/* -----------------------PROBLEM-DESCRIPTION-------------------------------

  This is a continuation of the previous exercise.

  The British Empire adopted the Gregorian Calendar in 1752, which was a
  leap year. Prior to 1752, they used the Julian Calendar. Under the Julian
  Calendar, leap years occur in any year that is evenly divisible by 4.

  Using this information, update the function from the previous exercise
  to determine leap years both before and after 1752.

---------------------------------------------------------------------------- */

// Version 1 ------------------------------------

function isLeapYear(year) {
  if (year < 1752) {
    return year % 4 === 0;
  }

  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
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
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true


// Version 2 ------------------------------------

function isLeapYearV2(year) {
  if (year < 1750) {
    return year % 4 === 0;
  } else {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
  }
}

isLeapYearV3(2016);      // true
isLeapYearV3(2015);      // false
isLeapYearV3(2100);      // false
isLeapYearV3(2400);      // true
isLeapYearV3(240000);    // true
isLeapYearV3(240001);    // false
isLeapYearV3(2000);      // true
isLeapYearV3(1900);      // false
isLeapYearV3(1752);      // true
isLeapYearV3(1700);      // true
isLeapYearV3(1);         // false
isLeapYearV3(100);       // true
isLeapYearV3(400);       // true


// Version 3  ------------------------------------
function isLeapYearV3(year) {
  if (year < 1750 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
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
isLeapYearV2(1700);      // true
isLeapYearV2(1);         // false
isLeapYearV2(100);       // true
isLeapYearV2(400);       // true


/* -------------------------BOOK-SOLUTION----------------------------------

  function isLeapYear(year) {
    if (year < 1752 && year % 4 === 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  }

---------------------------------------------------------------------------- */