function lowerInitial(word) {
  return word[0].toLowerCase();
}

// An assumption : word will always have a non-zero length
console.log(lowerInitial('Amanda'));
console.log(lowerInitial('Matt'));

// Breaks when emtpy string passed as argument
console.log(lowerInitial(''));


