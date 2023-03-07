// // Task
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Solution
function sumTwoSmallestNumbers(numbers) {
  // Step 1
  let sortedNumbers = numbers.sort((a, b) => a - b);
  // Step 2
  return sortedNumbers[0] + sortedNumbers[1];
}

// Step 1: Sort numbers using sort()
// Step 2: return the sum of index 0 and 1 of the sorted array
