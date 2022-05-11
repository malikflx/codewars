// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
  return s.repeat(n); // .repeat() returns the string that it was appended to the number of times given in the method. It's then returned in concatenated format.
}

// Test Case
console.log(repeatStr(7, 'I am happy!'));