/*
  # Given: 
  This is a continuation of the previous exercise.

  The British Empire adopted the Gregorian Calendar in 
  1752, which was a leap year. Prior to 1752, they used 
  the Julian Calendar. Under the Julian Calendar, leap 
  years occur in any year that is evenly divisible by 4.

  Using this information, update the function from the 
  previous exercise to determine leap years both before
  and after 1752.

PROBLEM---------------------------------
-Input: Number (year)
-Output: Boolean
-Details: 
  - Julian Calender - before 1752 
    - leap year = year evenly divisible by 4
  - Gregorian Calendar - 1752 (inclusive) and after
     - year % 4 === 0 && year % 100 === 0 && year % 400 === 0
     - year % 4 === 0 && !year % 100 === 0

EXAMPLES--------------------------------
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

DATA STRUCTURE--------------------------
  n/a 

ALGORITHM-------------------------------

- define fxn `isLeapYear` that takes a `year` representing a year as input 
- First, compare the the year against 2 ranges [0 - 1752) or >= 1752 to determine
  which definition of leap year to use for cacluation
  - IF `year` is between [0 - 1752)
    - check if the `year` is evenly divisible by 4
     - return the result of the comparison (true or false)
  - IF >= 1752 
    - check if `year` is evenly divisible by 400 
    - check if `year` is evenly divisible by 4 and ! evenly divisible by 0 
    - return the result of the comparison (true or false)
 
*/

/* function isLeapYear(year) {
  if (year < 1752) {
    return year % 4 === 0; 
  } 

  if (year % 400 === 0) {
    return true; 
  } else if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true; 
  } else {
    return false; 
  }
}
 */


// LS Solution Given
function isLeapYear (year) {
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

// isLeapYear(2016)
  // => `year` init to 2016 
    // 2016 is ! less than 1752 -> short-circuits, condition of the if evaluates to false, body doesn't execute and skips to next clause
      // line 77 -> condition evaluates to false -> body doesn't execute, skips to next clause
        // line 79 -> condition of the IF evaluates to false -> body doesn't exeucte, skips to next clause
          // line 82 -> evaluates and returns result of expression 2016 % 4 === 0 => returns true
          

console.log(isLeapYear(2016));      // true 
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false   
console.log(isLeapYear(100));       // true 
console.log(isLeapYear(400));       // true

