// Task
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Solution

String.prototype.toJadenCase = function () {
  // Step 1
  let newStrArr = this.split(" ");
  for (i = 0; i < newStrArr.length; i++) {
  // Step 2
    newStrArr[i] = newStrArr[i].charAt(0).toUpperCase() + newStrArr[i].slice(1)
  }
// Step 3
  return newStrArr.join(" ")
};

// Step 1: Convert string to an array
// Step 2: Loop through the array and capitalize the first letter of each item
// Step 3: Join the array to turn it back into a string