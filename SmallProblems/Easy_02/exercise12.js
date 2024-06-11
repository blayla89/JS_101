/* -------------PROBLEM DESCRIPTION---------------------
  # Write a function that takes a number as an argument.
    If the argument is a positive number, return the
    negative of that number. If the argument is a
    negative number, return it as-is.

  Example Output:
    negative(5);     // -5
    negative(-3);    // -3
    negative(0);     // -0

------------------------------------------------------ */

function negative(num) {
  return Math.abs(num) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


function negativeV2(num) {
  return Math.sign(num) === -1 ? num : -num;
}

console.log(negativeV2(5));     // -5
console.log(negativeV2(-3));    // -3
console.log(negativeV2(0));     // -0


/* -----------------BOOK SOUTION------------------------

  function negative(number) {
    return Math.abs(number) * -1;
  }

------------------------------------------------------ */

