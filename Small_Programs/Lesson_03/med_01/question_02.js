/* =========================================================

Question 2:

Starting with the string:

  let munstersDescription = "The Munsters are creepy and spooky.";

Return a new string that swaps the case of all of the letters:

  `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;


========================================================== */

let munstersDescription = "The Munsters are creepy and spooky.";

// Solutions =============================================

// Personal : --------------------------------------------

// Strategy 1: Array.prototype.split() + Array.prototype.reduce()

let letters = munstersDescription.split('');

let swapped = letters.reduce((accumulator, el) => {
  if (el === 'T' || el === 'M') {
    return accumulator + el.toLowerCase();
  }
  return accumulator + el.toUpperCase();
}, '');

console.log(swapped);

// --------------------------------------------------------

// Strategy 2: for loop

let swapped2 = '';

for (let idx = 0; idx < munstersDescription.length; idx += 1) {
  let currentChar = munstersDescription[idx];
  if (currentChar === 'T' || currentChar === 'M') {
    swapped2 += currentChar.toLowerCase();
  } else {
    swapped2 += currentChar.toUpperCase();
  }

}

console.log(swapped2);

// --------------------------------------------------------


// Book: --------------------------------------------------

console.log(
  munstersDescription
    .split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("")
);