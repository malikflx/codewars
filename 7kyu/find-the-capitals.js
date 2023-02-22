// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Solution
var capitals = function (word) {
  let indexes = [];
  let wordArr = word.split("");

  for (i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === wordArr[i].toUpperCase()) {
      indexes.push(wordArr.indexOf(wordArr[i]));
    }
  }
  return indexes;
};

// Step 1: Create an empty array to receive the indexes
// Step 2: Convert string to an array
// Step 3: Check each item in the array to see if it matches its capital letter counterpart, if so, get the index of the item and push it into the empty array for indexes
// Step 4: Return indexes array

// Test Cases
console.log(capitals("EnGiNeEr"));
console.log(capitals("DeVeLoPeR"));
console.log(capitals("SoFtWaRe"));
