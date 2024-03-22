/*
  Create a simple tip calculator. The program should prompt for a
  bill amount and a tip rate. The program must compute the tip, and
  then log both the tip and the total amount of the bill to the
  console. You can ignore input validation and assume that the user
  will enter numbers.
*/

/*
  Problem: -------------------
    - Input: String
    - Output: String
    - Details:
      - ignore input validation
      - display  tip and total rounded to two numbers pre-pended with $
         - if whole number, display .00

  Examples: -------------------
    What is the bill? 200
    What is the tip percentage? 15

    The tip is $30.00
    The total is $230.00

  Data Structure: n/a

  Algorithm: -----------------
  - # given 2 strings representing the bill amount and the tip percentage

  - SET `bill` = GET `bill`
   - coerce to Number data type

  - SET `tipPercentage` = GET `tipPercentage`
    - coerce to Number data type

  - SET `totalTip` = `bill` * `tipPercentage`
  - PRINT `totalTip` rounded to 2 decimals

  - SET `totalBill` = `bill` + `totalTip`
  - PRINT `totalBill` rounded to 2 decimals

*/

let rlSync = require('readline-sync');

console.log(`What is the bill?`);
let bill = rlSync.prompt();
bill = parseInt(bill, 10);
console.log(bill);

console.log(`What is the tip percentage?`);
let tipPercentage = rlSync.prompt();
tipPercentage = parseInt(tipPercentage, 10);
console.log(tipPercentage);

let totalTip = bill * (tipPercentage / 100);
console.log(`The tip is $${totalTip.toFixed(2)}`);

let totalBill = bill + totalTip;
console.log(`The total is $${totalBill.toFixed(2)}`);