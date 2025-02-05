/* =========================================================

  Question 5:  The following function unnecessarily uses two
  return statements to return boolean values. Can you rewrite
  this function so it only has one return statement and
  does not explicitly use either true or false?

  function isColorValid(color) {
    if (color === "blue" || color === "green") {
      return true;
    } else {
      return false;
    }
  }

  Try to come up with at least two different solutions.

========================================================== */

// Solutions =============================================

// Personal : --------------------------------------------

// Strategy 1:

function isColorValid(color) {
  return ((color === 'blue') || (color === 'green'));
}

// Strategy 2:

const IS_COLOR_VALID = color => (color === 'blue') || (color === 'green');


// Book: ------------------------------------------------

/*

function isColorValid(color) {
  return color === "blue" || color === "green";
}

const isColorValid = color => color === "blue" || color === "green";

const isColorValid = color => ["blue", "green"].includes(color);

*/