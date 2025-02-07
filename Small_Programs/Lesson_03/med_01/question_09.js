/* =========================================================

Question 9: Function and method calls can take expressions
as arguments. Suppose we define a function named rps as follows,
which follows the classic rules of the rock-paper-scissors game,
but with a slight twist: in the event of a tie, it just returns
the choice made by both players.

  function rps(fist1, fist2) {
    if (fist1 === "rock") {
      return fist2 === "paper" ? "paper" : "rock";
    } else if (fist1 === "paper") {
      return fist2 === "scissors" ? "scissors" : "paper";
    } else {
      return fist2 === "rock" ? "rock" : "scissors";
    }
  }

  What does the following code output? :

  console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

========================================================== */

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));


/* --------------------------------------------------------

After resolveing multiple function calls from innermost
to outermost, this logs "paper" to the console.

The outermost function call (and final expression to evaluate) is :
   rps("paper", "rock") ==> "paper"

This illustrates function composition, using the return value of the
previous function invocations as input for the next until the final
function returns a value that represents the whole.

--------------------------------------------------------- */