
/* =========================================================

Question 4: Using the following string, create a new string
that contains all lowercase letters except for the first
character, which should be capitalized. (See the example output.)

  let munstersDescription = "the Munsters are CREEPY and Spooky.";
  // => The munsters are creepy and spooky.


========================================================== */

let munstersDescription = "the Munsters are CREEPY and Spooky.";


// SOLUTIONS ===============================================

// Personal -----------------------------------------------

/* Strategy 1: [] property accesor, .toUpperCase(), .toLowerCase(),
 .slice(), concatenation */

let newStr1 = munstersDescription[0].toUpperCase() +
              munstersDescription.slice(1).toLowerCase();

console.log(newStr1);

/* Strategy 2: global variable, for loop, if/else, variable
re-assignment, [] property accessor, .toUpperCase(), .toLowerCase() */

let newStr2 = '';

for (let idx = 0; idx < munstersDescription.length; idx += 1) {
  if (idx === 0) {
    newStr2 += munstersDescription[idx].toUpperCase();
  } else {
    newStr2 += munstersDescription[idx].toLowerCase();
  }
}

console.log(newStr2);

// Book -------------------------------------------------

// munstersDescription.charAt(0).toUpperCase() +
// munstersDescription.substring(1).toLowerCase();
