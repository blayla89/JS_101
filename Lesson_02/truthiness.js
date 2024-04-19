console.log(`Ex 1: Printing Booleans --------- `)
console.log(true); 
console.log(false);
console.log(`\n`); 

console.log(`Ex 2: Assigning Booleans to Variables ---------` )
function makeLonger(string, longer) {
  if (longer) {
    return string + string; 
  } else {
    return string; 
  }
}

console.log(makeLonger('abc', true)); 
console.log(makeLonger('xyz', false)); 
console.log(`\n`); 

console.log(`Ex 3: Assign them & Pass them Around --------- `)
function isDigit(char) {
  if (char >= '0' && char <= '9') {
    return true; 
  } else {
    return false; 
  }
}

console.log(isDigit('5')); 
console.log(isDigit('a')); 
console.log(`\n`)
   an  
console.log(`Ex 4: Testing Booleans ---------------`); 
let value = 22;
if (value === true) {
  console.log(`It's true!`); 
} else if (value === false) {
  console.log(`It's false!`)
} else {
  console.log(`It's neither true nor false!`)
}
console.log(`\n`); 

console.log(`Ex 5 : Expressions and Conditionals ----------`);

let num = 5; 

if (num < 10) {
  // same as if ((num < 10) === true)
  console.log(`small number`);
} else {
  console.log(`large number`); 
}

num = 12; 
if (num < 10) {
  // same as if ((num < 10) === true)
  console.log(`small number`);
} else {
  console.log(`large number`); 
}

console.log(`\n`); 

console.log(`Ex 6: Fxns, Expressions, & Conditionals ---------`); 

function isSmall(number) {
  return number < 10; 
}
let number = 20; 

if (isSmall(num)) {
  console.log(`The function's conditional expression has been evaluated. Result: It's a small number.`)
} else {
  console.log(`The funtion's conditional expression has been evaluated. Result: It's a large number.`)
}

console.log(`\n`);

console.log(`Ex 7: Logical && -------------`); 
console.log(true && true); // => true
console.log(true && false); // => false
console.log(false && true); // => false
console.log(false && false); // => false

console.log(`\n`);

let num1 = 5; 
console.log(num1 < 10 && num1 > 3); // true && true => true 
console.log(num1 < 10 && num1 > 6); // true && false => false
console.log(num1 > 10 && num1 < 6); // => false && true => false
console.log(num1 > 10 && num1 < 3); // => false && false => false

console.log(`Ex 8: Logical && Chaining & Evaluation -----------`); 

let num2 = 5; 
console.log((num < 10) && (num > 0) && ((num % 2) === 1)); // true && true && true => true
console.log((num < 10) && (num > 0) && ((num % 2) === 1) && false) // true && true && true && false => false

console.log(`\n`);

console.log(`Ex 9: Logical || ------------------`); 

console.log(true || true); // => true
console.log(true || false); // => true
console.log(false || true); // => true
console.log(false || false); // => false

console.log(`\n`);

let num3 = 5; 
console.log(num1 < 10 || num1 > 3); // true || true => true
console.log(num1 < 10 || num1 > 6); // true || false => true
console.log(num1 > 10 || num1 < 6); // false || true => true
console.log(num1 > 10 || num1 < 3); // false || false => false

console.log(`\n`);

console.log(`Ex 10: Logical && and Short-Circuiting `); 
console.log(false && undefined.length); 
// console.log(true && undefined.length) /* ! raises a TypeError ! */

console.log(`Ex 10: Logical || and Short-Circuiting`); 
console.log(true || undefined.length); // => true
//console.log(false || undefined.length);  /* ! raises a TypeError ! */

console.log(`\n`);

console.log(`Ex 11: Short-Circuiting is Dangerous & Handy --------`); 

let name = null; 

if (name && name.length > 0) {
  console.log(`Hi, ${name}.`); 
} else {
  console.log(`Hello, whoever you are!`); 
}

name = 'Ophelia'

if (name && name.length > 0) {
  console.log(`Hi, ${name}.`); 
} else {
  console.log(`Hello, whoever you are!`); 
}

console.log(`\n`);

console.log(`Ex 12: Truthiness lets us use any condition or logical expression -------------`)

let num4 = 5; 

if (num) {
  console.log('valid number'); 
} else {
  console.log('error!')
}

console.log(`\n`);

console.log(`Ex 13: Truthiness can lead to suprising code -------------`); 
// p.s. this code is discouraged!

function getNameFromUser(name) {
  return ''; // hard-coded to return falsy value (empty string)
}

let name2; 
if ((name2 = getNameFromUser())) { // if empty string => false and else clause runs
  console.log(`Hi, ${name2}`); 
} else {
  console.log('you must enter your name!'); 
}

console.log(`\n`);


console.log(`Ex 14: Refactored code from Ex 13`); 

let name3 = getNameFromUser(); 

if (name3 === '') {
  console.log(`you must enter your name!`); 
} else {
  console.log(`Hi, ${name3}`); 
}





