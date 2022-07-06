// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Solution
function wave(str){
  // Step 1
  let strArr = [];
  // Step 2
  for (let i = 0; i < str.length; i++) {
    let character = str[i]
    // Step 3
    if (character === " ") {
      continue;
    }
    // Step 4
    strArr.push(str.slice(0, i) + character.toUpperCase() + str.slice(i + 1));
  }
  // Step 5
  return strArr;
}

// Step 1: create an empty array
// Step 2: Loop through array and capitalize each subsequent letter of each item in array
// Step 3: If the current character is whitespace, continue through loop without change
// Step 4: Using slice, capitalize each letter at the current index and add it to the empty array
// Step 5: Return the empty array