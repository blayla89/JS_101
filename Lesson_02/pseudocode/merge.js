/*
  PROBLEM:
    a function that takes two arrays of numbers and returns
    the result of merging the arrays. The elements of the 
    first array should become the elements at the even indexes
    of the returned array, while the elements of the second
    array should become the elements at the odd indexes.
    For instance:

    merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]


  elements of first array become elements at the even indexes 
  elements of the second array become elements at the odd indexes 


  [1, 2, 3], [4, 5, 6] 
    
    [1, 2, 3] -> 


Given a 2 collections of numbers. 

  declare `merged` and set it to an emtpy array 

  Iterate over the length of the input arrays with the same iterator for the length of both the arrays. 
    while the iterator is odd 
      add the current element to `merged`
    




*/


/* CASUAL PSEUDOCODE -------------------------------



-------------------------------------------------- */

/* FORMAL PSEUDOCODE -------------------------------

START 

# Given 2 collections of integers. 

  SET merged = []
  SET evenIdx = 0
  SET oddIdx = 1

  SET iterator = 0 

  WHILE iterator < the length of both arrays combined 
    IF arr1[iterator] 
    


-------------------------------------------------- */




function merge(arr1, arr2) {

  let merged = []; 
  let evenIdx = 0; 
  let oddIdx = 1; 
  console.log(`Start of Program:`, { merged, evenIdx, oddIdx})

  for (let idx = 0; idx < (arr1.length * 2); idx += 1) {
    const iteration = idx + 1; 
    console.log(`\nStart of loop:`, {iteration, idx, merged, evenIdx, oddIdx} ); 
    if (arr1[idx]) { 
      merged[evenIdx] = arr1[idx]; 
      evenIdx += 2; 
    } 
    if (arr2[idx]) { 
      merged[oddIdx] = arr2[idx]; 
      oddIdx += 2; 
    }
    console.log(`\nEnd of of loop:`, {iteration, idx, merged, evenIdx, oddIdx} ); 

  }
  
}

merge([1, 2, 3], [4, 5, 6]); 