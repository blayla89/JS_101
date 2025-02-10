/* =========================================================

  Question 4 : Can you identify all of the variables,
  primitive values, and objects in the following code?

  function boo(scare) {
    let myBoo = scare.toUpperCase() + "!!!";
    console.log(myBoo);
  }

  const halloweenCollection = {
    greet: "Happy Halloween",
    scare: "Boo",
    wish: "May all your pumpkins be glowing",
  };

  let myBoo = boo(halloweenCollection["greet"]);

========================================================== */

function boo(scare) { // scare = "Happy Halloween"
  let myBoo = scare.toUpperCase() + "!!!"; // "Happy Halloween"
  console.log(myBoo); // logs "HAPPY HALLOWEEN!!!"
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]); // resolves to "Happy Halloween"


// VARIABLES (6)
// boo (g), scare (l)
// myBoo (l)
// halloweenCoolection (g)
// myBoo (g)
// console (** missed **)

// PRIMITIVES (13)
// "!!!"
// 'greet', 'scare', 'wish'
// "Happy Halloween", "Boo", "May all your pumpkins be glowing"
// "greet" property accessor (** missed **)
// "Happy Halloween" (resolved value of function argument)
// "Happy Halloween" (return value of scare.toUpperCase())
// "Happy Halloween" (return value from concatenation, assigned to myBoo)
// "Happy Halloween" string logged to console
// undefined (returned function value, assigned to myBoo) (** missed **)

// OBJECTS (3)
// boo
// console (arguably .log and .toUpperCase as well)
// halloweenCollection
