// Task
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solution
function findShort(s){
  // Step 1
  wordsArray = s.split(" ");
  console.log(wordsArray);
  
  // Step 2
  sortedArray = wordsArray.sort((a, b) => a.length - b.length);
  
  // Step 3
  return sortedArray[0].length;
}

// Step 1: Turn string into an array of words, using split() on spaces
// Step 2: Sort the array from smallest word to longest word
// Step 3: Return the length of the first item in the sorted array

