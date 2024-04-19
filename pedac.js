/*
  ---------------------------- PEDAC --------------------------------

  - problem solving process that introduces systematic thinking 
    - mitigates hack and slash coding - jumping straight into coding 
    - house anaology 

  - understand the problem BEFORE diving into the solution 

  P : Problem 
  E : Examples/Test Cases 
  D : Data Structure 
  A : Algorithm 
  C : Code with Intent

Problem ------------------------------------
  - Understanding the problem
    - read the problem statement THOROUGHLY 
    - ask questions 
    - 3 categories: 
      * Input
      * Output
      * Rules
      
Examples/ Test Cases -----------------------
 - An extension of the Problem step 
    - look at examples/test cases provided and : 
      1. validate our understanding of the problem 
      2. derive implicit requirements, * if any *

--------------------Pause to think of a mental model -------------------------------------------
- Do I understand what the problem requires us to do in order to get from input to output? 
- strategy to develop a mental model : 
  - compare the input to ouput => bridge the gap
  - is there a pattern? 

      
 
Data Structure -------------------------------
- Do I need an array or object to house the data? 

Algorithm ------------------------------------
- essentially pseudocode
- Series of steps that details **how** to get from input to output
  - difference b/w mental model - mental model = higher level, broad, conceptual
    - algorithm includes ALL the details - trasnferable to code whereas 
- right level of detail 
  - high level enough so it's language agnoistic 
      - no specific language syntax or specific methods
      - don't marry self to specific way of doing things 
  - specific enough to implement

  Algorithm: 
  X Use the For Loop 
  X Use the for Each method 

  O iterate over the values

  - why ? maybe when translating to specific code, the method doesn't work the way you expected it to 
  - correct verification - give it to another person for another language and they should be able to translate it 
  - can you translate it directly to code? 

Code with INTENT ------------------------------------
    - RUN YOUR CODE OFTEN !!!!!!!
      - console.log() is your friend here - helps you find bugs eariler
      - don't improvise anything new - i.e new features
      - if something doesn't work, don't panic -> stop coding and go back to the algorithm

*/

/*
  # GIVEN : 
   - Multiples of 3 and 5 :
    - Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5.
      - For instance, if the supplied number is 20, the result should be 90 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20). 
      - You may assume that the number passed is an integer greater than 1. 

Problem -------------------------------------------------------------
  1. Input: 
    - Number (integer) above 1
  2. Output: 
    - Number 
    - Sum of multiples of 3 and 5 between 1 and input 
  3. Rules/Additional Details: 
    - The input number is inclusive towards the sum 
    - only multiples of 3 and 5 are counted toward the sum 
    -  What counts as a 'multiple'? 
      - Number can be divided by 3 or 5 without remainder

Examples and Test Cases ---------------------------------------------
  - An extension of the Problem step 
    - look at examples/test cases provided and : 
      1. validate our understanding of the problem 
      2. derive implicit requirements, * if any *

  multisum(3) // 3 
  multisum(5) // 8 
  multisum(10) // 33  
  multisum(1000) // 234168

  ------------------------- INTERMISSION -----------------------------

   Mental Model # 1: 
   ------------------
     10 => 33 
         10 => 1 -> 2 -> **3** -> 4 -> **5** -> **6** -> 7 -> 8 -> **9** -> **10** => 33

      - Iterate through the numbers from 1 to input and count multiples of 3 and 5 towards the sum 
      
   
    
     
  Mental Model # 2: 
  ------------------
  10 => 33 
      10 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [3, 5, 6, 9, 10] => 33
    
    - Iterate through the numbers from 1 to input and put them in an array, then keep only the multiples of 3 and 5. Then find the sum. 


  Data Structure -------------------------------------------------------------
    - Mental model # 1 : n/a
    - Mental model # 2 : Array 
  
  Algorithm ------------------------------------------------------------------

  #1
  --
  10 => 1 -> 2 -> **3** -> 4 -> **5** -> **6** -> 7 -> 8 -> **9** -> **10** => 33

  - declare variable `sum` and init to 0 
  - Iterate through all the numbers between 1 and the input number, inclusive
    - if the current number when divided by 3 or 5 has a 0 remainder, then count it towards the `sum`
  - once iteration is finished, return `sum` 

  #2 
  --

  10 => [] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [3, 5, 6, 9, 10] => 33

  - declare `multiples` and set it to []
  - iterate through the numbers from 1 to input, inclusive, and add them to the `multiples`
  - iterate through `multiples` and keep only the values with numbers that when divided by 3 or 5 have a remainder of 0
  - return the sum of `multiples`

  Code with INTENT
    - RUN YOUR CODE OFTEN !!!!!!!
 */

// # 1 
  /*   function multisum(num) {
      let sum = 0; 
      for (let i = 1; i <= num; i += 1) {
        if (i % 3 === 0 || i % 5 === 0){
         sum += i; 
        }
      }
      console.log(sum); 
      return sum; 
    }

   
    multisum(3) // 3 
    multisum(5) // 8 
    multisum(10) // 33  
    multisum(1000) // 234168 */

  // #2

  function multisum(num) {
    let multiples = []; 
    for (let i = 1; i <= num; i += 1) {
      multiples.push(i)
    }
    multiples = multiples.filter(el => el % 3 === 0 || el % 5 === 0); 
    let sum = multiples.reduce((acc, val)=> acc + val, 0)
    console.log(sum); 
    return sum; 
  }

  multisum(3) // 3 
  multisum(5) // 8 
  multisum(10) // 33  
  multisum(1000) // 234168 