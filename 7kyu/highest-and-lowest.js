// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution:
function highAndLow(numbers){
  // Step 1
  let strArr = numbers.split(" ");
  let numArr = [];
  // Step 2
  for (i = 0; i < strArr.length; i++) {
    numArr.push(parseInt(strArr[i]));
  }
  // Step 3
 let highest = Math.max(...numArr);
  // Step 4
  let lowest = Math.min(...numArr);
  // Step 5
  highest = highest.toString();
  lowest = lowest.toString();
  // Step 6
  let highestAndLowest = [];
  highestAndLowest.push(highest, lowest)
  return highestAndLowest.join(' ')
}

// Step 1: turn string of numbers into an array
// Step 2: Convert each string into a number
// Step 3: Get max number
// Step 4: Get min number
// Step 5: Convert numbers to string
// Step 6: Return Max and Min as string with spaces