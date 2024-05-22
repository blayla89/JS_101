/* -----------------------PROBLEM-DESCRIPTION-------------------------------
 Create a simple tip calculator. The program should prompt for a bill
 amount and a tip rate. The program must compute the tip, and then log
 both the tip and the total amount of the bill to the console. You can
 ignore input validation and assume that the user will enter numbers.
---------------------------------------------------------------------------- */

// PSEUDOCODE:
// get bill amt
// get tip rate as percent
// convert tip rate to decimal
// display the total tip
// display the total (bill amt + tip)

// Variables
const READLINE = require('readline-sync');

const MESSAGES = {
  getBill : `What is the bill?`,
  getTipRate : `What is the tip percentage?`
};

let info = {};

// FXNS
function prompt(message) {
  console.log(`=> ${message}`);
}

function calculateTipTotal() {
  const TIP_RATE_AS_DECIMAL = info.tipPercentage / 100;
  const BILL = info.billAmount;
  return TIP_RATE_AS_DECIMAL * BILL;
}

function calculateTotalBill() {
  const BILL = info.billAmount;
  return BILL + calculateTipTotal();
}

// main ----------------------------------------------------------------------

prompt(MESSAGES.getBill);
info.billAmount = Number(READLINE.question());

prompt(MESSAGES.getTipRate);
info.tipPercentage = Number(READLINE.question());

console.log(`\n`);
prompt(`The tip is $${calculateTipTotal().toFixed(2)}`);
prompt(`The total is $${calculateTotalBill().toFixed(2)}`);

/* -------------------------BOOK-SOLUTION----------------------------------
  let readlineSync = require("readline-sync");

  let bill = parseFloat(readlineSync.question("What is the bill?\n"));

  let percentage = parseFloat(
    readlineSync.question("What is the tip percentage??\n")
  );

  let tip = bill * (percentage / 100);

  let total = bill + tip;

  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
---------------------------------------------------------------------------- */
