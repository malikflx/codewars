// // Task
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// Solution
function capitalize(s) {
  // Step 1
  let newArray = [];

  // Step 2
  let stringArray = s.split("");

  // Step 3
  let evens = stringArray.map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char;
    }
  });

  let odds = stringArray.map((char, index) => {
    if (index % 2 !== 0) {
      return char.toUpperCase();
    } else {
      return char;
    }
  });

  // Step 4
  newArray.push(evens.join(""));
  newArray.push(odds.join(""));

  // Step 5
  return newArray;
}

// Step 1: Define an empty array to add the new string values to.
// Step 2: Convert the string into an array
// Step 3: Use map() to modify every other index based on the even values and then the odd values.
// Step 4: Push both new arrays for even and odd into the new array, using join() to convert the values back into a string
// Step 5: Return the new array with the desired values
