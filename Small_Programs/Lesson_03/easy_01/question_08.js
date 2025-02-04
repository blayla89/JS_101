/* =========================================================

Question 8: How can we add the family pet, "Dino", to the following array?;

 let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

========================================================== */


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];


// Solutions ================================================

flintstones.concat('Dino');

flintstones.push('Dino');

flintstones[flintstones.length] = 'Dino';