// Task
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// Solution
const reverseSeq = n => {
  // Step 1
  let array = []
    // Step 2
    if (n > 0) {
      for (let i = 1; i <= n; i++){
      array.push(i)
    }
  }
  // Step 3
  return array.reverse()
};

// Step 1: Create empty array
// Step 2: add numbers up to and including n as long as n is greater than 0
// Step 3: return array in reverse