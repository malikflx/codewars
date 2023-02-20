// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// Solution
function sumDigits(number) {
  // Step 1
  const decimalFormat = (Math.abs(number) / 10).toFixed(1);
  // Step 2
  const decimalSum = decimalFormat.replace(".", "+");
  // Step 3
  return eval(decimalSum);
}

// Step 1: Convert number to decimal format using toFixed(). I'd have to use Math.abs() to get the absolute value of the number. This returns a string.
// Step 2: Use replace() to remove the decimals and replace it with "+"; Now "1.0" become "1+0".
// Step 3: Evaluate the number sentence using the eval() function which takes the string a adds it as an expression with integers.

// Test Cases
console.log(sumDigits(10));
console.log(sumDigits(49));
console.log(sumDigits(-43));
