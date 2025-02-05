/* =========================================================

  Question 2: What will the following code output?

  console.log([1, 2, 3] + [4, 5]);

========================================================== */


// Solutions =============================================

// Personal : --------------------------------------------

/*

  Outputs : `Object[object]Object[object]`
  Explanation: The binary `+` is an overloaded operator
  that performs concatenation or numerical addition depending
  on it's operands types. In this case, it will attempt to
  concatenation and type coerce the objects to strings which is
  `Object[object]` and concatenate them.

*/

// Book: ------------------------------------------------

// 1,2,34,5

/*
  In some languages you can use + to concatenate two arrays,
  but not in JavaScript. In JavaScript, the + operator first
  converts the arrays to strings, and then concatenates the
  strings, so the output is the string 1,2,34,5.
*/