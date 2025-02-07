/* =========================================================

  Question 7: What is the output of the following code?

    let answer = 42;

    function messWithIt(someNumber) {
      return (someNumber += 8);
    }

    let newAnswer = messWithIt(answer);

    console.log(answer - 8);

========================================================== */

let answer = 42; // declares variable init to primtive number

function messWithIt(someNumber) { //declares function that thats 1 param
  return (someNumber += 8);       // re-assigns parameter to 8
}

let newAnswer = messWithIt(answer); // declares variable it to rv of fxn invocation
console.log(answer - 8); // logs the result of subtracting 8 from global `answer` varible


/* --------------------------------------------------------
  I expect this to output to output 34. `answer` is init to
  a primitive value, which is immutable. When the `messWithIt`
  function is invoked, it is passed a copy of the value 34.
  From within the function, the local variable is re-assigned,
  not the global one. This function has no impact on the global
  `answer` variable therefore it resolves the expression passed
  to console.log as 34 and logs that value to the console.
-------------------------------------------------------- */