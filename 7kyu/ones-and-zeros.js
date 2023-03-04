// Task
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// Solution
const binaryArrayToNumber = (arr) => {
  // Step 1
  let binaryValue = arr.join("").toString(2);
  // Step 2
  let integerValue = parseInt(binaryValue, 2);
  return integerValue;
};

// Step 1: Convert the array to a string using join() and toString(2), using '2' to denote to convert it to a binary number.
// Step 2: convert it back into a number with a base value of 2 (since binary is a base2 number).

// Test Cases
console.log(binaryArrayToNumber([1, 0, 0, 1]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([1, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 0, 1, 1, 0, 1]));
