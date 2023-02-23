// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// Solution
function minMax(arr) {
  // Step 1
  let minMaxArr = [];
  // Steps 2 & 3
  minMaxArr.push(Math.min(...arr));
  minMaxArr.push(Math.max(...arr));
  // Step 4
  return minMaxArr;
}

// Step 1: Define an empty array to store the maximum and minimum numbers
// Step 2: Use Math.min() and Math.max() to find the minimum and maximum numbers in the array(use spread operator to expand the array into individual elements so Math.max can work)
// Step 3: push the outcomes of the Math methods into the empty array
// Step 4: return the new array

// Test Cases
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([4653154, 6]));
console.log(minMax([6]));
