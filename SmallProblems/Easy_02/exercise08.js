/*
  # Given:
    Write a function that returns an Array that contains
    every other element of an Array that is passed in as
    an argument. The values in the returned list should
    be those values that are in the 1st, 3rd, 5th, and
    so on elements of the argument Array.


Problem ---------------------------------------------
  -Input: Array
  -Output: Array
  -Details: output array only includes every other element of
  the input array (inclusive towards the first element)

Examples --------------------------------------------
  console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
  console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
  console.log(oddities(["abc", "def"])); // logs ['abc']
  console.log(oddities([123])); // logs [123]
  console.log(oddities([])); // logs []

Data Structure: Array

Algorithm:
  - Given an collection of elements

  - SET oddElements = an empty array
  - iterate over the input array
    - add the current element to `oddElements`
    - increment the iterator variable by 2
    - repeat until all elements in the array have been iterated over

  - PRINT `oddElements`

*/

function oddities(arr) {
  let arrOfOdds = [];
  for (let idx = 0; idx < arr.length; idx += 2) {
    let currentElement = arr[idx];
    arrOfOdds.push(currentElement);
  }
  return arrOfOdds;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []