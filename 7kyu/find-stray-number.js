// Task
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Solution
function stray(numbers) {
  // Step 1
  let sortedNumbers = numbers.sort((a, b) => a - b)
  console.log(sortedNumbers)
  // Step 2
  let orient = sortedNumbers[0];
  // Step 3
  if(orient != sortedNumbers[1] && orient != sortedNumbers[2]) return orient
  
  // Step 4
  for (let i = 1; i < sortedNumbers.length; i++) {
    if (orient != sortedNumbers[i]) return sortedNumbers[i]
  }
}

// Step 1: Sort the array from least to greatest
// Step 2: Use first number as number to compare to (key)
// Step 3: Compare the first number with the second number. Return the key if true
// Step 4: If it isn't true, for loop on the remaining to find the mismatch
