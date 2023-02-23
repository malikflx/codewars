// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Solution
function smallEnough(a, limit) {
  return a.every((i) => i <= limit);
}

// Step 1: Use every() function to loop over the array, using limit as the parameter to compare against

// Test Cases
console.log(smallEnough([1, 2, 3, 4, 5], 6));
console.log(smallEnough([1, 2, 3, 4, 5], 3));
