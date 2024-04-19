/* Catching Errors */

function parseJSON(data) {
  let result; 

  try {
    result = JSON.parse(data); // throws exception if data is invalid
  } catch(e) {
    // run this code IF JSON.parse throws an exception
    // 'e' contains an Error object that we can inspect and use
    console.log(`There was a ${e.name} when parsing JSON data: ${e.message}`); 
    result = null; 
  } finally {
    console.log(`Finished parsing data.`)
  }
  return result; 

}


let data = 'not valid JSON'; 
parseJSON(data); 



function cloneDinosaur(name) {
  // uses string to build obj containing info about the dinosaur clone
  try {
    let myDinosaur = {
      name: name, 
      dangerMessage: name.toUpperCase() + 'IS COMING!' 
    }
    return myDinosaur; 
  } catch(e) {
    console.log(`${e.name} : ${e.message}`); 
    return undefined; 

  } finally {
    console.log(`Dinosaur function complete`); 
  }

}

let badUserInput = null; 
let dino = cloneDinosaur(badUserInput);
// logs TypeError: Cannot read property 'toUpperCase` of null
// logs Dinosaur function complete

console.log(dino); 

let validUserInput = 'Jason'; 

let dinoV2 = cloneDinosaur(validUserInput); 
// `Dinosaur function complete`

console.log(dinoV2)
// { name: `Jason`, dangerMessage: `JASON IS COMING!}