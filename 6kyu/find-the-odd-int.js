// // Task
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Solution
function findOdd(A) {
  // Step 1
  const counts = {};
  // Step 2
  for (let i = 0; i < A.length; i++) {
    counts[A[i]] = (counts[A[i]] || 0) + 1;
  }
  // Step 3
  for (let [key, value] of Object.entries(counts)) {
    if (value % 2 !== 0) {
      return parseInt(key);
    }
  }
}

// Step 1: Declare an empty object to keep track of each number in the array
// Step 2: Loop over the array to check if the number already has been counted, if not, it should evaluate to 0, then we increment by 1
// Step 3: Use a 'for of' loop to loop over the entries of the count object (using the key and values as iterators. If the value of each key is odd then return the key.

// Test Cases
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([5, 5, 7]));
console.log(findOdd([40]));
