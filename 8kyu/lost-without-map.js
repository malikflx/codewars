// Task
// Given an array of integers, return a new array with each value doubled. You cannot mutate the original array

// For example:

// [1, 2, 3] --> [2, 4, 6]

// Solution
function maps(x) {
  let y = [];
  for (let i = 0; i < x.length; i++) {
    y.push(x[i] * 2);
  }
  return y;
}
