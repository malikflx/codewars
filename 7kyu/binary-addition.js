// Task
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// Solution
function addBinary(a,b) {
  // Step 1
  let sum = a + b;
  // Step 2
  return sum.toString(2); 
}

// Step 1: Create a sum variable which is the sum of the two parameters
// Step 2: use toString to convert integer to a string, which will be the binary representation of it.