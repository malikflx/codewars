// Task
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution
function find_average(array) {
  // Step 1
  if (array.length != 0) {
    // Step 2
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
  } else {
    // Step 3
    return 0;
  }
  
}

// Step 1: Check for empty array
// Step 2: If not empty, add all items in array using reduce() and divide it by the length of the array
// Step 3: If empty return 0
