/* =========================================================

Question 3: Determine whether the following object of people
and their age contains an entry for 'Spot':


  let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

========================================================== */


let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };


// SOLUTIONS ===============================================


// Strategy 1: Object.hasOwn()

Object.hasOwn(ages, 'Spot'); // false


// Strategy 2: Object.prototype.hasOwnProperty()

ages.hasOwnProperty('Spot'); // false

