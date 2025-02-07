/* =========================================================

Question 8: One day, Spot was playing with the Munster
family's home computer, and he wrote a small program
to mess with their demographic data:

  let munsters = {
    Herman: { age: 32, gender: "male" },
    Lily: { age: 30, gender: "female" },
    Grandpa: { age: 402, gender: "male" },
    Eddie: { age: 10, gender: "male" },
    Marilyn: { age: 23, gender: "female" },
  };

  function messWithDemographics(demoObject) {
    Object.values(demoObject).forEach(familyMember => {
      familyMember["age"] += 42;
      familyMember["gender"] = "other";
    });
  }

  After writing this function, he typed the following code:

    messWithDemographics(munsters);

  Before Grandpa could stop him, Spot hit the Enter key
  with his tail. Did the family's data get ransacked? Why or why not?

========================================================== */


let munsters = { // init to nested object (reference type)
  Herman: { age: 32, gender: "male" },
  Lily: { age: 32, gender: "male" },
  Grandpa: { age: 32, gender: "male" },
  Eddie: { age: 32, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) { // passed a reference
  Object.values(demoObject).forEach(familyMember => { // returns an array of objects
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

console.log(munsters);


/* ---------------------------------------------------------
  Yes, each of the family members age property will have 42
  years added to them while their gender property will all
  be changed to other. That is because objects are passed
  as references to the original object in memory. The function
  does not do anything to break the connection to the original
  object (e.g. make a copy or freeze it) making it vulnerable
  to mutation. Re-assigning an object property is destructive,
  so the original object will be mutated.
 --------------------------------------------------------- */