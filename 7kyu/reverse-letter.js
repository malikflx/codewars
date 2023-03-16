// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// Solution
function reverseLetter(str) {
  // Step 1
  let reverseArray = [];
  // Step 2
  let strArray = str.split("");
  // Step 3
  for (let i = 0; i < strArray.length; i++) {
    if (
      (strArray[i].charCodeAt(0) < 65 || strArray[i].charCodeAt(0) > 90) &&
      (strArray[i].charCodeAt(0) < 97 || strArray[i].charCodeAt(0) > 122)
    ) {
      console.log("not a letter");
    } else {
      // Step 4
      reverseArray.push(strArray[i]);
    }
    // Step 5
  }
  return reverseArray.reverse().join("");
}

// Step 1: Define an empty array to add the letters to be reversed
// Step 2: Turn str into an array using split()
// Step 3: Loop over the array and check the unicode value to to ensure that the character is a letter using .charCodeAt()
// Step 4: If it is a letter, push it into the empty array
// Step 5: Return the new array, reversed and joined.
