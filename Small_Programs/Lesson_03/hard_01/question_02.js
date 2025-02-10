/* =========================================================

  Question 2: What does the last line in the following code
  output?

    let object = { first: [1] };
    let numArray = object["first"];
    numArray.push(2);

    console.log(numArray); //  => "[1, 2]"
    console.log(object);

========================================================== */

let object = { first: [1] }; // creates object variable and stores --> to { first: [1] }
let numArray = object["first"]; // creates numArray and stores --> to [1]
numArray.push(2); // appends 2 to [1] ==> [1, 2]

console.log(numArray); //  => [1, 2]
console.log(object); // => { first: [1, 2] }


/*  ------------------------------------------------------------------------

  This logs { first: [1, 2] }

  This behavior is due to the way object types are stored in memory. Instead
  of storing the values directly in the variable, they store references to the
  orginal value in memory making them vulnerable to mutation. The `numArray`
  stores a reference to the original array since arrays are a type of object.
  The .push() method is destructive, directly modifying the original array in
  memory. Because `object` and `numArray` both reference the same array in
  memory, the changes are reflected in both.

------------------------------------------------------------------------ */