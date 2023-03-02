// // Task
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// Solution:
function gimme(triplet) {
  // Step 1
  let sortedTriplet = [...triplet].sort((a, b) => a - b);
  // Step 2
  return triplet.indexOf(sortedTriplet[1]);
}

// Step 1: Sort the triplet in ascending order (use spread syntax to make a copy of the array)
// Step 2: Return the index of the orignal triplet at the index that equals the index of the sorted triplet

// Test Cases
console.log(gimme([1, 2, 3]));
console.log(gimme([2, 3, 1]));
console.log(gimme([3.2, 1.4, 2.1]));
