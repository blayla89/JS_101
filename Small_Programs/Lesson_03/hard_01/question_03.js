/* =========================================================

Question 3: Given the following similar sets of code,
what will each code snippet print?

========================================================== */

// Snippet A ----------------------------------------------

/*
function messWithVars(one, two, three) { // variable shadowing
 // local variable init: one --> ['one'], two --> ['two'], three --> ['three']

  // LOCAL variable re-assignment (non-destructive)
  one = two; // local one --> ['two']
  two = three; // local two --> ['three']
  three = one; // local three --> ['one']
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is ['one]
console.log(`two is: ${two}`); // two is ['two']
console.log(`three is: ${three}`); // three is ['three'] */


// --------------------------------------------------------

// Snippet B ----------------------------------------------

/*
function messWithVars(one, two, three) {
  // local variable init: one --> ['one'], two --> ['two'], three --> ['three']

  // local variabe re-assignment (non-destructive, new arrays)
  one = ["two"]; // one --> ['two']
  two = ["three"]; // two --> ['three']
  three = ["one"]; // three --> ['one']
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`); // one is ['one']
  console.log(`two is: ${two}`); // two is ['two']
  console.log(`three is: ${three}`); // three is ['three'] */

// --------------------------------------------------------

// Snippet C ----------------------------------------------

function messWithVars(one, two, three) { // variable shadowing
  // local variable init : one --> ['one'], two --> ['two'], three --> ['three']

  // re-assignment of array element (destructive)
  one.splice(0, 1, "two"); // one --> ['two']
  two.splice(0, 1, "three"); // two --> ['three']
  three.splice(0, 1, "one"); // three --> ['one']
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is ['two']
console.log(`two is: ${two}`); // two is ['three']
console.log(`three is: ${three}`); // three is ['one']

// --------------------------------------------------------