// // Task
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Solution:
function oddOrEven(array) {
  // Step 1:
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  // Step 2:
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Step 1: Use reduce() to get the sum of all values in the array.
// Step 2: Use modulus on the sum, if no remainder, it is even, else it's odd.

// Test Cases
console.log(oddOrEven([1, 3, 5]));
console.log(oddOrEven([1, 2, 3]));
console.log(oddOrEven([0]));
