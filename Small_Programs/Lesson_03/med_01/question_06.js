/* =========================================================

Question 6: What do you think the following code will output?

  let nanArray = [NaN];
  console.log(nanArray[0] === NaN);

Bonus: How can you reliably test if a value is NaN?

========================================================== */

let nanArray = [NaN];
console.log(nanArray[0] === NaN);


/*

  The following code will output `false`. That is because `NaN` is
  the only value in JavaScript that is not equal to itself. However,
  There are two ways to reliably check if a number is `NaN` :
    1). Number.isNaN(value)
    2). Object.is(value, NaN)

*/