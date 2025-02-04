/* =========================================================

  QUESTION 4: Starting with the string:

  let famousWords = "seven years ago...";

  show two different ways to put the expected "Four score and "
  in front of it.

========================================================== */

let famousWords = "seven years ago...";


// SOLUTIONS =============================================

// PERSONAL ----------------------------------------------

// Stragety 1: String.prototype.concat()

let famousPhraseV1 = ''.concat('Four score and ', famousWords);
console.log(famousPhraseV1);

// Strategy 2: Concatenation

let famousPhraseV2 = 'Four score and ' + famousWords;
console.log(famousPhraseV2);


// BOOK ---------------------------------------------------

"Four score and " + famousWords;

"Four score and ".concat(famousWords);