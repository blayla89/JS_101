/* =========================================================

Question 5: What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

========================================================== */

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

/*

  Normally, I would expect the first line to output 0.9 and
  the second to output true (provided the strict equality
  has lower precedence).
  However, I know there is some bizarre behavior with floating
  point math so I expect a long, weird decimal close to 0.9
  (but not exactly 0.9) for the first and the second to therefore
  log `false`.

*/