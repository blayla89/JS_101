/* =========================================================

Question 5:  What will the following code output?

  console.log(false == '0');
  console.log(false === '0');

========================================================== */

console.log(false == '0');
console.log(false === '0');

// Solution: =============================================

/*

The first line of code will output `true` while the second
line will output `false`.

This is because The `==` and `===` behave differently
when their operands are mixed types. The former performs
type coercion while the latter does not. The expression
false == '0' will be implicitly coerced to 0 == '0' --> 0 == 0
which will return `true`. The expression false === '0' does
not perform type coercion so both value and type must be the
same. In this case, they are not so it returns `false`.

*/