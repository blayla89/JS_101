/* =========================================================

Question 1: Given a string, return a new string that replaces
  every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house
              training your pet dinosaur.";

========================================================== */

let advice = "Few things in life are as important as house training your pet dinosaur.";


// Solutions ===============================================

/* --------------------------------------------------------
  Strategy 1: replaceAll(pattern, replacement)
-------------------------------------------------------- */

advice = advice.replaceAll('important', 'urgent');

/* --------------------------------------------------------
  Strategy 2: .split(separator) + (for loop, conditional, re-assignment)
            + .join(glue)
-------------------------------------------------------- */

let words = advice.split(' ');

for (let idx = 0; idx < words.length; idx += 1) {
  if (words[idx] === 'important') {
    words[idx] = 'urgent';
  }
}

words.join(' ');

// =========================================================
