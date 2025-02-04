/* ======================================================

  QUESTION 2:

  The Array.prototype.reverse method reverses the order of
  elements in an array, and Array.prototype.sort can
  rearrange the elements in a variety of ways, including
  descending. Both of these methods mutate the original
  array as shown below. Write two distinct ways of reversing
  the array without mutating the original array. Use reverse
  for the first solution, and sort for the second.

=========================================================== */


// Solutions =================================================

/* --------------------------------------------------------
   Strategy 1: Use Array.prototype.slice() to make a shallow
               copy, then apply .reverse() to the copy
-------------------------------------------------------- */

let numbers = [1, 2, 3, 4, 5];

let reversedCopy = numbers.slice().reverse();

console.log(reversedCopy === numbers); // [5, 4, 3, 2, 1]

/* --------------------------------------------------------
   Strategy 2: Use spread syntax to make a copy, then apply
              .sort() to the copy
 -------------------------------------------------------- */

let sortedCopy = [...numbers].sort((num1, num2) => num2 - num1);

console.log(sortedCopy); // [5, 4, 3, 2, 1]

console.log(sortedCopy === numbers); // false


/* --------------------------------------------------------
   BONUS: declare new variable init to empty array, iterate
          over the numbers array,
-------------------------------------------------------- */

let bonusCopy = [];

numbers.forEach((num) => {
  bonusCopy.unshift(num); // [5, 4, 3, 2, 1]
});

console.log(bonusCopy === numbers); //false
