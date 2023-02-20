// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// Solution
function sumDigits(number) {
  number = Math.abs(number)
    .toString()
    .split("")
    .map((i) => Number(i))
    .reduce((acc, curr) => acc + curr, 0);
  return number;
}

// Step 1: Convert the absolute value of a number to a String using Math.abs() and toString().
// Step 2: Turn the string into an array of strings using toString().
// Step 3: Use map() to turn each string in an array to an integer (number) using Number().
// Step 4: Use reduce() to get the summation of all numbers in the array.

// Test Cases
console.log(sumDigits(10));
console.log(sumDigits(49));
console.log(sumDigits(-43));
console.log(sumDigits(6789988529));
