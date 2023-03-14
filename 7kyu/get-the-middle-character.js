// Task
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// Solution
function getMiddle(s) {
  // Step 1
  let length = s.length;
  let middleChar = Math.floor(length / 2);

  // Step 2
  if (length % 2 === 0) {
    return s.slice(middleChar - 1, middleChar + 1);
  } else {
    // Step 3
    return s.slice(middleChar, middleChar + 1);
  }
}

// Step 1: Define length as the length of the word and use Math.floor to get the length of the word, always rounding down if necessary
// Step 2: if the length is even, use slice to return the middle character - 1 and middle character + 2 (which is the same as the two middle characters)
// Step 3: if od, just use slice to return the middle character. Since floor rounds down, we have to use +1
