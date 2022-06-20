// Task
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Solution:
function grow(x){
  // Step 1
  return x.reduce((acc, curr) => acc * curr, 1)
}

// Step 1: Return accumulated value using multiplication in a reduce function.