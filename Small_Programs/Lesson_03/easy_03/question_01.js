/* =========================================================

  Question 1: Write three different ways to remove all of the
  elements from the following array:

  let numbers = [1, 2, 3, 4];

========================================================== */

let numbers = [1, 2, 3, 4];

// Solutions =============================================

// Personal : --------------------------------------------

// Strategy 1: set .length property to 0

numbers.length = 0;

// Strategy 2: Array.prototype.splice()

numbers.splice(0);

// Strategy 3: loop & Array.prototype.pop()

for (let idx = 0; idx < numbers.length; idx + 1) {
  numbers.pop();
}

// Book: ------------------------------------------------

numbers.length = 0;

numbers.splice(0, numbers.length);

while (numbers.length) {
  numbers.pop();
}