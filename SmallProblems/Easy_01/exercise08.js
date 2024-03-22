/*
  # Given : In the modern era under the Gregorian Calendar, 
  leap years occur in every year that is evenly divisible by 
  4, unless the year is also divisible by 100. If the year 
  is evenly divisible by 100, then it is not a leap year, 
  unless the year is also evenly divisible by 400.

  Assume this rule is valid for any year greater than year 0.
  Write a function that takes any year greater than 0 as input 
  and returns true if the year is a leap year, or false if it
  is not a leap year.


  PROBLEM -------------------
  - Input: Number > 0 (year)
  - Output: Boolean 
  - Details: 
   - What is a leap year? 
    - year % 4 === 0 && year % 100 === 0 && year % 400 === 0
    - year % 4 === 0 && !year % 100 === 0
    

  EXAMPLES ------------------
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

  INTERMISSION---------------
  // preset result to false - means it's not divisible by 4

  DATA STRUCTURE : n/a 

  ALGORITHM------------------

   # Given year 
   
   - validate year is Number data type and > 0 
    - if not, prompt user to renter number > 0 

  - SET `year` to Number input 

*/

/* function isLeapYear(num) {
  let year = num; 
  console.log((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0) || (year % 4 === 0) && !(year % 100 === 0)); 
} */

/* function isLeapYear(year) {
  let isDivisibleBy4 = year % 4 === 0; 
  let isDivisibleBy100 = year % 100 === 0; 
  let isDivisibleBy400 = year % 400 === 0; 

  if (isDivisibleBy4 && isDivisibleBy100 && isDivisibleBy400){
    console.log(true)
    return true; 

  } else if (isDivisibleBy4 && !isDivisibleBy100) {
    console.log(true); 
    return true; 
  } 

  console.log(false)
  return false; 
}

 */


function isLeapYear(year) {
  console.log((year % 4 === 0) && !(year % 100 === 0) || (year % 400 === 0)); 
  return (year % 4 === 0) && !(year % 100 === 0) || (year % 400 === 0);
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