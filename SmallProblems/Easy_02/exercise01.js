/*
  # Problem:

    Create a function that takes 2 arguments, an array
    and an object.The array will contain 2 or more elements
    that, when combined with adjoining spaces, will produce
    a person's name. The object will contain two keys, "title"
    and "occupation", and the appropriate values. Your function
    should return a greeting that uses the person's full name,
    and mentions the person's title.


Problem ---------------------------------------
- Input: an Array and an Object
- Output: String - greeting containing person's full name and occupation
- Details:
  - obj input -> 2 keys 'title' and 'occupation'
  - log `Hello {full name}! Nice to have a {title, occupation} around.

Examples --------------------------------------
  console.log(
    greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
  );
  // logs Hello, John Q Doe! Nice to have a Master Plumber around.

Data Structure:

Algorithm -----------------------------------
- declare variable `fullName`
    - initialize to the result of merging the elements of
    the array into a string
- declare variable `object` and set to the object input
- declare variable `title` and set to the value of the
title property on the object
- print a greeting to the console as a string including
 their full name, title, and occupation

# given 2 collections: a collection of components of a full
 name as an Array and an object containing details about
 the person's occupation and title

START

SET `fullName` = merge elements of array into a string
SET `title` = READ obj.title
SET occupation = READ obj.occupation

PRINT greeting including fullName, title, and occupation

END

*/

function greetings(arr, obj) {
  const FULL_NAME = arr.join(' ');
  const TITLE = obj.title;
  const OCCUPATION = obj.occupation;
  console.log(`Hello, ${FULL_NAME}! Nice to have a ${TITLE} ${OCCUPATION} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

function greetingsBV (name, status) {
  return `Hello, ${name.join(' ')}. Nice to have a ${status["title"]} ${status["occupation"]} around.`;
}
console.log(
  greetingsBV(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);