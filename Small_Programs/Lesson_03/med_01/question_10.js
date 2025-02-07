/* =========================================================

Question 10: Consider these two simple functions:

  function foo(param = "no") {
    return "yes";
  }

  function bar(param = "no") {
    return param === "no" ? "yes" : "no";
  }

What will the following function invocation return?

  bar(foo());

========================================================== */

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));

/* -----------------------------------------------------------
  This function invoation returns "no".
  The inner function foo() reutrns "yes", which is then used
  as the argument (input) for the outer bar() function. Default
  parameters are only used when the parameter evaluates as undefined.
  The foo() parameter deaults to "no", but the bar parameter does
  not - the conditional expression of the ternary statement evaluates
  as 'false' and therefore returns "no".

  // foo() => "yes"

    // bar("yes") => "no"

----------------------------------------------------------- */

