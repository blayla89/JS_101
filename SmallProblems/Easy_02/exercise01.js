/* ------------- PROBLEM DESCRIPTION ---------------------

  Create a function that takes 2 arguments, an array
  and an object. The array will contain 2 or more
  elements that, when combined with adjoining spaces,
  will produce a person's name. The object will contain
  two keys, "title" and "occupation", and the appropriate
  values. Your function should return a greeting that
  uses the person's full name, and mentions the person's
  title.

------------------------------------------------------ */

function greetings(arr, obj) {
  return `Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}


console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));


/* ------------- BOOK SOLUTION ---------------------

function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}

------------------------------------------------- */
