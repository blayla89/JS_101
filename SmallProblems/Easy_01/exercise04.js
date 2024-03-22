/*
  # Build a program that asks the user to enter the length and width
    of a room in meters, and then logs the area of the room to the
    console in both square meters and square feet.

  Problem -----------------
    - Input: 2 Strings (length and width in meters)
    - Ouput: String (containing area in square meters AND sqaure feet)
    - Details:
      - no input validation required
      - prompt user for input
      - get input from user
      - 1 square meter = 10.7639 square feet
      - return area in both square meters and square feet interpolated in string
      - just numeric digit given as string input
      - round to 2 digits

  Mental Model ------------

  Area in squareMeters = lengthInMeters * widthInMeters

  Area in squareFeet =
  Examples-----------------
    Enter the length of the room in meters:
      10
    Enter the width of the room in meters:
      7
    The area of the room is 70.00 square meters (753.47 square feet).

  Data Structure-----------
    - n/a

  Algorithm----------------

  - declare const `SQUARE_METER` = 10.7639
  - GET length in meters from user:
    - declare `lengthInMeters` and set to return value:
      - prompt user for length in meters and coerce to Number
  - GET width in meters from user:
    - declare `widthInMeters` and set to return value of:
      -prompt user for width in meters and coerce return value to Number
  - calculate area in square meters
    - declare `areaInMeters` and init to `lengthInMeters` * `widthInMeters`
  - calculate area in square feet
  - return a string containing area in meters and feet rounded to two decimals
*/

let rlSync = require('readline-sync');

const SQUARE_METER = 10.7639;

console.log(`Please enter the length in meters:`);
let lengthInMeters = Number(rlSync.prompt());
console.log(lengthInMeters);

console.log(`Please enter the width in meters:`);
let widthInMeters = Number(rlSync.prompt());
console.log(widthInMeters);

let areaInMeters = lengthInMeters * widthInMeters;

let areaInSquareFeet = areaInMeters * SQUARE_METER;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInSquareFeet.toFixed(2)} square feet).`);
