/* -----------------------PROBLEM-DESCRIPTION-----------------------------

 Create a simple tip calculator. The program should prompt for a bill
 amount and a tip rate. The program must compute the tip, and then log
 both the tip and the total amount of the bill to the console. You can
 ignore input validation and assume that the user will enter numbers.

------------------------------------------------------------------------- */

const READLINE = require('readline-sync'); 

function prompt(msg) {
  console.log(`=> ${msg}`); 
}

function calculateTip(bill, rate) {
  return bill * (rate / 100); 
}

function calculateTotal(bill, tip) {
  return tip + bill; 
}


prompt(`What is the bill?`); 
const BILL_AMT = Number(READLINE.question()); 

prompt(`What is the tip percentage?`); 
const TIP_RATE = Number(READLINE.question()); 

const TIP = calculateTip(BILL_AMT, TIP_RATE); 

const TOTAL = calculateTotal(BILL_AMT, TIP); 

prompt(`The tip is $${TIP.toFixed(2)}.\nThe total is $${TOTAL.toFixed(2)}`); 



/* -----------------------BOOK-SOLUTION---------------------------------

  let readlineSync = require("readline-sync");

  let bill = parseFloat(readlineSync.question("What is the bill?\n"));

  let percentage = parseFloat(
    readlineSync.question("What is the tip percentage??\n")
  );

  let tip = bill * (percentage / 100);

  let total = bill + tip;

  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}.`);

---------------------------------------------------------------------- */




