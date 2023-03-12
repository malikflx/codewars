// // Task
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// Solution
function addLength(str) {
  // Step 1
  let wordLength = [];
  // Step 2
  let stringArray = str.split(" ");
  // Step 3
  for (let i = 0; i < stringArray.length; i++) {
    wordLength.push(stringArray[i] + " " + stringArray[i].length);
  }
  // Step 4
  return wordLength;
}

// Step 1: Define empty array to store results
// Step 2: turn the string into an array
// Step 3: Loop over the array and push the index plus its length to the empty array
// Step 4: Return the new array
