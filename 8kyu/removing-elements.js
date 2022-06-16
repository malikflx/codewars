// Task
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// Solution:
function removeEveryOther(arr){
  // Step 1
  for (i = 0; i < arr.length; i++) {
    arr.splice(i + 1, 1) 
  }
  // Step 2
  return arr
}

// Step 1: Loop through array and remove the current item + 1
// Step 2: return modified array
