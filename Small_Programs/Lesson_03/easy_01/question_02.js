/* =========================================================

Question 2: How can you determine whether a given string
ends with an exclamation mark (!)?

  let str1 = "Come over here!"; // true
  let str2 = "What's up, Doc?"; // false

========================================================== */

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false


// SOLUTIONS ===============================================

// Strategy 1: String.prototype.endsWith()

console.log(str1.endsWith('!'));  // true
console.log(str2.endsWith('!'));  // false


// Strategy 2: String.prototype.at() + ===

console.log(str1.at(-1) === '!');  // true
console.log(str2.at(-1) === '!');  // false


// Strategy 3: .length property + [] + ===

console.log(str1[str1.length - 1] === '!');  // true
console.log(str2[str2.length - 1] === '!');  // false

