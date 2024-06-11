/* -------------PROBLEM DESCRIPTION---------------------

 # Create a function that takes 2 arguments, an array
   and an object. The array will contain 2 or more
   elements that, when combined with adjoining spaces,
   will produce a person's name. The object will contain
   two keys, "title" and "occupation", and the appropriate
   values. Your function should return a greeting that
   uses the person's full name, and mentions the person's
   title.

------------------------------------------------------ */

// Version 1

function greetingsV1(arr, obj) {
  let fullName = arr.join(' ');
  console.log(`Hello ${fullName}! Nice to have a ${obj.title} ${obj.occupation} around.`);
}

greetingsV1(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

// Version 2

function greetingsV2(arr, obj) {
  const FULL_NAME = arr.join(' ');
  const TITLE = obj.title;
  const OCCUPATION = obj.occupation;

  console.log(`Hello ${FULL_NAME}! Nice to have a ${TITLE} ${OCCUPATION} around. `);
}

greetingsV2(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

// Version 3

function greetingsV3(arr, obj) {
  let name = '';
  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentValue = arr[idx];
    if (idx === arr.length - 1) {
      name += currentValue;
    } else {
      name += currentValue + ' ';
    }
  }
  let credentials = Object.values(obj).join(' ');

  console.log('Hello ' + name + '! Nice to have a ' + credentials + ' around.' );

}

greetingsV3(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

/* -----------------BOOK SOUTION------------------------

  function greetings(name, status) {
    return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
      status["occupation"]
    } around.`;
  }

------------------------------------------------------ */