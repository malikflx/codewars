// Task
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Solution:

function sumMix(x){
  // Step 1
  sumNum = x.map(i => Number(i))
  console.log(sumNum);
  // Step 2
  return sumNum.reduce((curr, acc) => curr + acc, 0)
}

// Step 1: turn all items in array into integers
// Step 2: Return the sum of all items in the array