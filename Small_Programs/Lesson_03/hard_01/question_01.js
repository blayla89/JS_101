/* =========================================================

  Question 1: Will the following functions return the same results?

    function first() {
      return {
        prop1: "hi there",
      };
    }

    function second() {
      return
      {
        prop1: "hi there";
      }
    }

    console.log(first());
    console.log(second());

========================================================== */


/* -------------------------------------------------------

  These functions return different things.
  first() returns an object {prop: "hi there"} while
  second() returns undefined. second()'s curly braces
  don't start until the line after the return keyword,
  so it interprets 'return' as the entire statement,
  terminating the function so the object is never evaluated.

  ** refinement: behavior due to ASI -> engine inserts ;
  after return keyword implicity terminating the function

------------------------------------------------------- */