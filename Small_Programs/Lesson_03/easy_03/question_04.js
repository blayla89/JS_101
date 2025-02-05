/* =========================================================

  Question 4: What will the following code output?

  let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
  let arr2 = arr1.slice();
  arr2[0].first = 42;
  console.log(arr1);


  Try to answer without running the code.

========================================================== */

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);


// Solutions =============================================

// Personal : --------------------------------------------

// logs  [{ first: "value1" }, { second: "value2" }, 3, 4, 5]

/*

Array.prototype.slice()returns a copy of the arr preventing mutation

X INCORRECT: slice() returns a shallow copy so while it prevents mutation
of the outer array, it doesn't prevent mutation of the objects because the
copy contains pointers to the original sub-objects and re-assignment of
an array element is a destructive operation.

*/

