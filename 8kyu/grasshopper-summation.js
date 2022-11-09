// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// Solution
function summation(num) {
  // Step 1
  let newArr = [];
  for (i = 0; i <= num; i++) {
    newArr.push(i);
  }
  // Step 2
  return newArr.reduce((acc, curr) => acc + curr, 0);
}

// Step 1: create range from 1 to num and add to array
// Step 2: use reduce function to return summation
