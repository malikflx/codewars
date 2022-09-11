// Task
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Solution
function descendingOrder(n){
  // Step 1
  let newArr = n.toString().split('');
  // Step 2
  return Number(newArr.sort((a, b) => b - a).join(''));
}

// Step 1: Turn input into an array of integers. Use toString() to turn it into a string, then use split() to change it into an array.
// Step 2: Return the array; converted back to an integer using Number(), sorted in descending order with sort(), and joined back together using join(). 