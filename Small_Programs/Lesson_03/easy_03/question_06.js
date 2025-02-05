/* =========================================================

  Question 6: Examine the following code carefully. Can you
  identify all of the variables, primitive values, and objects
  that exist when this code executes?

  let arr = [1, 2, 3];
  let newArr = arr;

  const num = arr[0];
  let newNum = num;

  function double(num) {
    return num * 2;
  }

  double(newNum);

========================================================== */

let arr = [1, 2, 3]; // 1, 2, 3
let newArr = arr;    // 1, 2, 3

const num = arr[0];  // 1
let newNum = num;    // 1

function double(num) {    // 1
  return num * 2;         // 1, 2, 3
}

double(newNum);           // 1, 3

// Variables :
// arr1
// newArr
// num
// newNum
// double

// Objects:
// [1, 2, 3]
// [function: double]

// Primtives
// 1, 2, 3
// 1, 2, 3 (copies of arr elements)
// 1  (copy arr[0]), ** 0 idx to access element (missed)
// 1  (copy of num)
// 1  (copy of newNum)
// 1, 2, 3 (copy of local num, 2, 2(result of operation))
// 1, 3 (newNum argument copy, 2 when function returns)