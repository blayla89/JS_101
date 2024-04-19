/* ----------------------------
  Steps to Debugging:

  1. Reproduce the Error
  2. Determine the Boundaries
  3. Trace the Code
  4. Understand the Problem Well
  5. Implement a fix
  6. Test the fix

------------------------------ */

// EXAMPLE ----------------------------------------------------------------

function car(newCar) {
  let make = getMake(newCar);
  let model = getModel(newCar);
  return [make, model];
}

function getMake(newCar) {
  return newCar.split(" ")[0];
}

function getModel(newCar) {
  return newCar.split(" ")[2];
}

let [make, model] = car("Ford Mustang");
console.log(make === 'Ford'); // => true

//console.log(model[0] === 'M'); // => throws TypeError when checking to see if the value of model starts with the letter 'M'

/* -------------------------------------------------------------------------

  ## Reproduce the Error & Determine the Boundaries ##

  /* [make, model] = car(`Mitsubishi Mirage`);
  console.log(model[0] === 'M'); // throws TypeError */

  /* [make, model] = car('Chevy Malibu');
  console.log(model[0] === 'M'); // throws TypeError */

  /* [make, model] = car('Toyota Corolla');
  console.log(model[0] === 'M'); // throws TypeError - fails same way when passing data that wouldn't match the test */

// Result: error is consistenly reproduced, model is undefined every time


/* ----------------------------------------------------------------------
  ## Trace the Code ##

  call car -> string passed as arg -> string becomes local varaible
  newCar -> passed to two helper functions -> each helper fxn splits
  string into two strings and returns the make and model as independent strings  -> getMake() returns 'Ford' as expected -> ** getModel() returns Undefined **

  ** Trapping the error : error originates in getModel() function

------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------
  ## Understand the Problem Well ##

  - analyze getModel() function's code
    - return value always undefined => step through code and inspect values

  function getModel(newCar) {
    return newCar; // => 'Ford Mustang'
  }

  function getModel(newCar) {
    return newCar.split(" "); // => ['Ford', 'Mustang'];
  }

  function getModel(newCar) {
    return newCar.split(" ")[2]; // => Undefined
  }

------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------
  ## Implement a Fix ##
  - multiple ways, multiple layers
    - depends on: program modfiability
      - if not modifiable, suppression may be only solution!
        * libaries, frameworks, ...

  Supression:

  try {
    return model[0] === 'M';
  } catch {
    return false;
  }

  Modified offending Code:

  function getModel(newCar) {
    return newCar.split(" ")[1];
  }

------------------------------------------------------------------------*/


/* ----------------------------------------------------------------------
  ## Test the Fix ##

  function getModel(newCar) {
    return newCar.split(" ")[1];
  }

  console.log(model[0] === 'M'); // => true

------------------------------------------------------------------------*/
