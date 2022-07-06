// Task
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Solution
function XO(str) {
  // Step 1:
  let counterX = 0
  let counterO = 0
  // Step 2:
  let strArr = str.split('');
  // Steps 3 and 4:
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "x" || strArr[i] === "X") {
      counterX++
    } else if (strArr[i] === "o" || strArr[i] === "O") {
      counterO++
    }
  }
  console.log(`${counterX}, ${counterO}`)
  if (counterX === counterO) {
    return true;
  } else {
    return false;
  }
}

// Step 1: Create variable to store counters for X and O
// Step 2: Turn the string into an array
// Step 3: Loop through the array and compare and check for index comparisons against X and O
// Step 4: If current index is same as x or X, increment X counter. If index is the same as o or O, increment O counter
// Step 5: If both counters are equal return true, else return false