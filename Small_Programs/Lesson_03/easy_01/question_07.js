/* =========================================================

Question 7: Determine whether the name Dino appears in the
strings below -- check each string separately:


  let str1 = "Few things in life are as important as house
  training your pet dinosaur.";
  
  let str2 = "Fred and Wilma have a pet dinosaur named Dino.";


========================================================== */

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";


// Solutions =============================================

function containsWord(str, searchWord) {
  let words = str.substring(0, str.length - 1).split(' ');
  return words.includes(searchWord);
}


console.log(containsWord(str1, 'Dino')); // false
console.log(containsWord(str2, 'Dino')); // true


console.log(str1.includes('Dino')); // false
console.log(str2.includes('Dino')); // true

console.log(str1.match('Dino') !== null); // false
console.log(str2.match('Dino') !== null); // true