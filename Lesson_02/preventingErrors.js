/* Preventing Errors */

function lowerInitial(word) {
  return word[0].toLowerCase(); 
}

// works well with simple words
console.log(lowerInitial('Joe')); // => j
console.log(lowerInitial('Karen')); // => k 

// fails when passed an empty String
/* console.log(lowerInitial(''));  */

// Guard Clause 
function lowerInitialGuard(word) {
  // if word is empty String, return dash instead of proceeding
  if (word.length === 0) {
    return '-'; 
  } 
  // word guaranteed to have at min 1 character so word[0] never evaluates as unefined
  return word[0].toLowerCase(); 
}


