/*
 # Given problem: Write a program that will ask for user's
 name. The program will then greet the user. If the
 user writes "name!" then the computer yells back
 to the user.

Problem -------------------------------------
- Input: String (user's name)
- Output: String - message greeting the user
- Details:
  - if the input String ends with a '!' character,
  return the entire output message in uppercase

Examples ------------------------------------

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

Data Structure: n/a

Algorithm:
- import lib to get input from CLI
- get the name of the user
- check if the name ends with a '!' character
  - if yes
    - update the input string with the '!' character removed
    - log a greeting message in uppercase including the updated name
  - if no, log a standard greeting message

*/

let rlSync = require('readline-sync');

function prompt(message) {
  console.log(`> ${message}`);
}

prompt(`What is your name?`);
let name = rlSync.question();

if (name.endsWith('!')) {
  name = name.slice(0,[name.length - 1]);
  prompt(`Hello ${name}. Why are we screaming?`.toUpperCase());
} else {
  prompt(`Hello, ${name}.`);
}