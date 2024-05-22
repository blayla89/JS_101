/* -----------------------PROBLEM-DESCRIPTION-------------------------------

  # Build a program that asks the user to enter the length and width
    of a room in meters, and then logs the area of the room to the
    console in both square meters and square feet.
    Note: 1 square meter == 10.7639 square feet

    Do not worry about validating the input at this time. Use the
    readlineSync.prompt method to collect user input.

---------------------------------------------------------------------------- */

const READLINE = require('readline-sync');
const NUMBER_OF_FEET_PER_ONE_METER = 10.7639;
let info = {};

function prompt(message) {
  console.log(`=> ${message}`);
}

function calculateAreaInMeters() {
  const LENGTH_IN_METERS = info.lengthInMeters;
  const WIDTH_IN_METERS = info.widthInMeters;
  const AREA_IN_METERS = LENGTH_IN_METERS * WIDTH_IN_METERS;
  return AREA_IN_METERS;
}

function calculateAreaInFeet () {
  const AREA_IN_METERS = info.areaInMeters;
  const AREA_IN_FEET = AREA_IN_METERS * NUMBER_OF_FEET_PER_ONE_METER;
  return AREA_IN_FEET;
}

prompt(`Enter the length of the room in meters:`);
info.lengthInMeters = Number(READLINE.question());

prompt(`Enter the width of the room in meters:`);
info.widthInMeters = Number(READLINE.question());

info.areaInMeters = calculateAreaInMeters();
info.areaInFeet = calculateAreaInFeet();

console.log(info);

prompt(`The area of the room is ${info.areaInMeters.toFixed(2)} square meters (${info.areaInFeet.toFixed(2)} square feet).`);

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

---------------------------------------------------------------------------- */


