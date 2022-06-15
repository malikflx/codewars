// Task
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// Solution:
function squareDigits(num){
  // Step 1
  const numArr = String(num).split('')
  // Step 2
  for (i = 0; i < numArr.length; i++){
    numArr[i] = Math.pow(Number(numArr[i]), 2);
  }
// Step 3
return parseInt(numArr.join(''));
}

// Step 1: Turn number into an array
// Step 2: Square every number in array
// Step 3: Join array to create the new concatenated number
