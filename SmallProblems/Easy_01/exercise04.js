/* -----------------------PROBLEM-DESCRIPTION-------------------------------

  # Build a program that asks the user to enter the length and width
    of a room in meters, and then logs the area of the room to the
    console in both square meters and square feet.
    Note: 1 square meter == 10.7639 square feet

    Do not worry about validating the input at this time. Use the
    readlineSync.prompt method to collect user input.

---------------------------------------------------------------------------- */

const SQMETERS_TO_SQFEET =  10.7639;

const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Enter the length of the room in meters:`);
let length = Number(READLINE.question());


prompt(`Enter the length of the room in meters:`);
let width = Number(READLINE.question());


function calculateArea(num1, num2, units ) {
  let area;

  if (units === 'meters') {
    area = num1 * num2;
  } else {
    area = (num1 * num2) * SQMETERS_TO_SQFEET;
  }

  return area.toFixed(2);
}

prompt(`The area of the room is ${calculateArea(length, width, 'meters')} square meters (${calculateArea(length, width, 'feet')} square feet).`);

/*

/* -------------------------BOOK-SOLUTION----------------------------------

  let readlineSync = require("readline-sync");

  const SQMETERS_TO_SQFEET = 10.7639;

  console.log("Enter the length of the room in meters:");
  let length = readlineSync.prompt();
  length = parseInt(length, 10);

  console.log("Enter the width of the room in meters:");
  let width = readlineSync.prompt();
  width = parseInt(width, 10);

  let areaInMeters = (length * width);
  let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

  console.log(
    `The area of the room is ${areaInMeters.toFixed(2)} square meters
     (${areaInFeet.toFixed(2)} square feet).`
  );

-------------------------------------------------------------------------- */


