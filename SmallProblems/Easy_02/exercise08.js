/* -------------PROBLEM DESCRIPTION---------------------

  # Write a function that returns an Array that contains
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

function oddities(arr) {
  let arrOfOddities = [];

  for (let idx = 0; idx < arr.length; idx += 2) {
    let currentElement = arr[idx];
    arrOfOddities.push(currentElement);
  }

  return arrOfOddities;
}

console.log(`\nVersion 1: `);
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


function odditiesV2(arr) {
  let idx = 0;
  let arrOfOddities = [];
  while (idx < arr.length) {
    arrOfOddities.push(arr[idx]);
    idx += 2;
  }
  return arrOfOddities;
}

console.log(`\nVersion 2: `);
console.log(odditiesV2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(odditiesV2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(odditiesV2(["abc", "def"])); // logs ['abc']
console.log(odditiesV2([123])); // logs [123]
console.log(odditiesV2([])); // logs []


function odditiesV3(arr) {
  let iteration = 0;
  let arrOfOddities = [];

  arr.forEach(el => {
    if (iteration % 2 === 0) {
      arrOfOddities.push(el);
    }
    iteration += 1;
  });

  return arrOfOddities;

}

console.log(`\nVersion 3: `);
console.log(odditiesV3([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(odditiesV3([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(odditiesV3(["abc", "def"])); // logs ['abc']
console.log(odditiesV3([123])); // logs [123]
console.log(odditiesV3([])); // logs []


/* -----------------BOOK SOUTION------------------------

  function oddities(array) {
    let oddElements = [];
    for (let idx = 0; idx < array.length; idx += 2) {
      oddElements.push(array[idx]);
    }
    return oddElements;
  }

------------------------------------------------------ */