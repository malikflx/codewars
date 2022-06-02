// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Solution:
function countPositivesSumNegatives(input) {
  // Step 1:
  let countSum = []
  let negativeNumbers = [];
  let positiveNumber = 0;
  let negativeNumber = 0;
  // Step 2
  if (input != null) {
    for (let i = 0; i < input.length; i++) {
      // Step 3:
      if (input[i] > 0) {
        positiveNumber++
        console.log(positiveNumber)
      } else if (input[i] < 0) {
        negativeNumbers.push(input[i])
      }
    }
  } else {
    countSum = []
    return countSum;
  }

  // Step 4
  negativeNumbers = negativeNumbers.reduce((acc, curr) => acc + curr, 0);
  // Step 5
  if (positiveNumber != 0 && negativeNumbers != 0) {
    countSum.push(positiveNumber, negativeNumbers)
  }

  return countSum;
}

// Step 1: Create two empty arrays, positive number variable, negative number variable
// Step 2: Use a for loop to check each item in input array. This should happen by conditional of an input not being null
// Step 3: If positive, increase positive number variable by 1. If negative, add to negative number array
// Step 4: Get sum of negative numbers
// Step 5: Push positiveNumber and negativeNumbers to countSum array