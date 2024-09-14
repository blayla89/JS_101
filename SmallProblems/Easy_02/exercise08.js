/* -------------PROBLEM DESCRIPTION---------------------

    Write a function that returns an Array that contains
    every other element of an Array that is passed in as
    an argument. The values in the returned list should
    be those values that are in the 1st, 3rd, 5th, and
    so on elements of the argument Array.

  Examples:
    console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
    console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
    console.log(oddities(["abc", "def"])); // logs ['abc']
    console.log(oddities([123])); // logs [123]
    console.log(oddities([])); // logs []

------------------------------------------------------ */

// Version 1 : for loop & concat() method
console.log(`\nVersion 1: for loop & Array.prototype.concat() method `);

function oddities(arr) {
  let newArr = [];
  for (let idx = 0; idx < arr.length; idx += 2) {
    newArr = newArr.concat(arr[idx]);
  }
  return newArr;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


// Version 2: forEach(), indexOf(), and push() method
console.log(`\nVersion 2: for loop & Array.prototype.concat() method `);

function odditiesV2(arr) {
  let newArr = [];
  arr.forEach(el => {
    if (arr.indexOf(el) % 2 === 0) {
      newArr.push(el);
    }
  });
  return newArr;
}

console.log(odditiesV2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(odditiesV2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(odditiesV2(["abc", "def"])); // logs ['abc']
console.log(odditiesV2([123])); // logs [123]
console.log(odditiesV2([])); // logs []


/* -----------------BOOK SOUTION------------------------

  function oddities(array) {
    let oddElements = [];
    for (let idx = 0; idx < array.length; idx += 2) {
      oddElements.push(array[idx]);
    }
    return oddElements;
  }

------------------------------------------------------ */