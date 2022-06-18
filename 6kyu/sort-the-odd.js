// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Solution
function sortArray(array) {
  // Step 1
  let oddArray = [];
  // Step 2
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0){
      oddArray.push(array[i])
    }
  }
  // Step 3
  oddArray.sort((a, b) => a - b)
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0) {
      oddArray.splice(j, 0, array[j])
    }
  }
  console.log(oddArray)
  return oddArray
}

// Step 1: Create an empty array for odd numbers
// Step 2: Add all odd numbers into oddArray
// Step 3: Sort oddArray
// Step 4: Add even numbers from original array to oddArray at the same index of each even number in the original array
