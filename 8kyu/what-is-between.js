// Task
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Solution:
function between(a, b) {
  // your code here
  let range = [];
  for (i = a; i <= b; i++) {
    range.push(i);
  }
  return range;
}