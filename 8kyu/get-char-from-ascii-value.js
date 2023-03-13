// Task
// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// For ASCII table, you can refer to http://www.asciitable.com/

// Solution
function getChar(c) {
  // Step 1
  return String.fromCharCode(c);
}

// Step 1: use String.fromCharCode() to get the unicode value and return the corresponding character
