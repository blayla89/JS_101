/* =========================================================

Question 1:
Let's do some "ASCII Art": a stone-age form of nerd artwork
from back in the days before computers had video screens.

For this practice problem, write a program that outputs
The Flintstones Rock! 10 times, with each line indented
1 space to the right of the line above it. The output
should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...

========================================================== */


// SOLUTIONS ============================================

// Personal: --------------------------------------------

function ASCII_ART(count, msg) {

  for (let idx = 0; idx < count; idx += 1) {
    console.log(msg.padStart(msg.length + idx, ' '));
  }

}

ASCII_ART(10, 'The Flintstones Rock!');

// Book: -----------------------------------------------

for (let padding = 0; padding <= 9; padding++) {
  console.log(" ".repeat(padding) + "The Flintstones Rock!");
}