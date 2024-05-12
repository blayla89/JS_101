// VARIABLES ________________________________________

const READLINE_SYNC = require('readline-sync');
const MESSAGES = require('./messages_loanCalculator.json');
const REQUIRED_INPUTS = MESSAGES.introduction.requiredInputs;
const TABLE_ROWS = MESSAGES.table.tableRows;


// HELPER FXNS _____________________________________________

function displayMessage(message) {
  console.log(`=> ${message}`);
}

function addProperty(accessNotation, propertyName, value) {
  accessNotation[propertyName] = value;
}

function getInput(key) {
  displayMessage(key);
  return READLINE_SYNC.question();
}

function renderTable() {
  TABLE_ROWS.forEach(row => {
    console.log(row);
  });
}

function updateTableRow(index, value) {
  TABLE_ROWS[index] = value;
}


function refresh() {
  console.clear();
  renderTable();
}

function invalidNumber(userInput) {
  const MAX =  Number.MAX_SAFE_INTEGER;
  let isEmptyString = String(userInput).trim() === '';
  let isNaN = Number.isNaN(Number(userInput));
  let isZeroOrNegative =  Number(userInput) <= 0;
  let isNotSafeInteger = Number(userInput) > MAX;

  return isEmptyString || isNaN || isZeroOrNegative || isNotSafeInteger;
}

function zeroSum(years, months) {
  return years + months === 0;
}

function getMonthlyInterestRate() {
  const APR = MESSAGES.rate.annualPercentageRate / 100;
  const MONTHLY_INTEREST_RATE = APR / 12;
  return MONTHLY_INTEREST_RATE;
}

function standardizeStringInput(variable) {
  return variable.trim().toLowerCase();
}


// MAIN FXNS ----------------------------------------


function welcomeUser() {
  displayMessage(MESSAGES.introduction.greeting);

  displayMessage(MESSAGES.introduction.details);

  displayMessage(MESSAGES.introduction.preparation);

  REQUIRED_INPUTS.forEach(input => {
    console.log(' ' + input);
  });

  getInput(MESSAGES.introduction.resume);

  console.clear();
}


function getAndSetValidLoanAmount() {
  let loanAmount = getInput(MESSAGES.loanAmount.getLoanAmount);

  while (invalidNumber(loanAmount)) {
    loanAmount = getInput(MESSAGES.loanAmount.inputError);
    console.clear();
  }

  loanAmount = Number(loanAmount);

  addProperty(MESSAGES.loanAmount, 'totalLoanAmount', loanAmount);
  return loanAmount;
}

function getAndSetValidAPR() {
  let annualPercentageRate = getInput(MESSAGES.rate.getAnnualPercentageRate);

  while (invalidNumber(annualPercentageRate)) {
    annualPercentageRate = getInput(MESSAGES.rate.inputError);
    console.clear();
  }

  annualPercentageRate = Number.parseFloat(annualPercentageRate);

  addProperty(MESSAGES.rate, 'annualPercentageRate', annualPercentageRate);

  return annualPercentageRate;
}


function getAndSetValidLoanDurationYears() {
  let years = getInput(MESSAGES.loanDuration.getValidYears);

  if (years !== '0') {
    while (invalidNumber(years)) {
      years = getInput(MESSAGES.loanDuration.inputError);
      console.clear();
    }
  }

  years = Number(years);

  addProperty(MESSAGES.loanDuration, 'years', years);

  return years;
}

function getAndSetValidLoanDurationMonths() {
  let months = getInput(MESSAGES.loanDuration.getValidMonths);

  if (months !== '0') {
    while (invalidNumber(months)) {
      months = getInput(MESSAGES.loanDuration.inputError);
      console.clear();
    }
  }
  months = Number(months);
  addProperty(MESSAGES.loanDuration, 'months', months);

  return months;
}

function getAndSetTotalLoanDurationInMonths() {
  let years = MESSAGES.loanDuration.years;
  let months = MESSAGES.loanDuration.months;

  while (zeroSum(years, months)) {
    displayMessage(MESSAGES.loanDuration.inputErrorTotalDuration);
    years = Number(getInput(MESSAGES.loanDuration['re-enterYears']));
    months = Number(getInput(MESSAGES.loanDuration['re-enterMonths']));
  }

  addProperty(MESSAGES.loanDuration, 'years', years);
  addProperty(MESSAGES.loanDuration, 'months', months);

  const LOAN_DURATION_IN_MONTHS = (years * 12) + months;

  addProperty(MESSAGES.loanDuration, 'loanDurationInMonths', LOAN_DURATION_IN_MONTHS);

  return LOAN_DURATION_IN_MONTHS;
}


function calculateAndSetMonthlyPayment() {

  const LOAN_AMOUNT = MESSAGES.loanAmount.totalLoanAmount;

  const MONTHLY_INTEREST_RATE = getMonthlyInterestRate();

  const LOAN_DURATION_IN_MONTHS = MESSAGES.loanDuration.loanDurationInMonths;

  const MONTHLY_PAYMENT = LOAN_AMOUNT *
       (MONTHLY_INTEREST_RATE /
       (1 - Math.pow((1 + MONTHLY_INTEREST_RATE), (-LOAN_DURATION_IN_MONTHS))));

  addProperty(MESSAGES, 'monthlyPayment', MONTHLY_PAYMENT);

  return MONTHLY_PAYMENT;

}

function repeat() {
  const VALID_SESSION_STATUS_RESPONSES = MESSAGES.session.validInput;
  let repeatResponse = standardizeStringInput(
    getInput(MESSAGES.session.getRepeatOrExit));

  while (!VALID_SESSION_STATUS_RESPONSES.includes(repeatResponse)) {
    repeatResponse = getInput(MESSAGES.session.inputError);
    repeatResponse = standardizeStringInput(repeatResponse);
  }
  return repeatResponse;
}

function resetTable() {
  updateTableRow(3, 'Loan Amount: $_______.__               \n');
  updateTableRow(4, 'APR:  ___._ %                          \n');
  updateTableRow(5, 'Loan Duration:  ___years   ___months   \n' );
  updateTableRow(7, 'Monthly Payment: $_______.__ ');
}

// MAIN =====================================================================

welcomeUser();

while (true) {

  renderTable();

  getAndSetValidLoanAmount();

  updateTableRow(3, `Loan Amount: $${MESSAGES.loanAmount.totalLoanAmount.toFixed(2)}\n`);
  refresh();


  getAndSetValidAPR();
  updateTableRow(4, `APR: ${MESSAGES.rate.annualPercentageRate.toFixed(1)}%\n`);
  refresh();


  getAndSetValidLoanDurationYears();
  updateTableRow(5,  `Loan Duration:  ${MESSAGES.loanDuration.years} years   ___months\n` );
  refresh();


  getAndSetValidLoanDurationMonths();
  updateTableRow(5,  `Loan Duration:  ${MESSAGES.loanDuration.years} years  ${MESSAGES.loanDuration.months} months \n`);
  refresh();


  getAndSetTotalLoanDurationInMonths();
  updateTableRow(5,  `Loan Duration:  ${MESSAGES.loanDuration.years} years  ${MESSAGES.loanDuration.months} months \n`);
  refresh();


  calculateAndSetMonthlyPayment();
  updateTableRow(7, `Monthly Payment: $${MESSAGES.monthlyPayment.toFixed(2)}`);
  refresh();

  if (repeat() === 'y') {
    resetTable();
    console.clear();
  } else {
    displayMessage(MESSAGES.session.farewell);
    break;
  }
}