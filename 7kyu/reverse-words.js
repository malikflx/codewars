// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Solution:
function reverseWords(str) {
  // Step 1
  let newStr = str.split(" ");
  
  // Step 2
  for (i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].split("").reverse().join("");
  }
  
  // Step 3
  let reversedNewStr = newStr.join(" ");
  
  // Step 4
  return reversedNewStr;
}

// Step 1 - Turn String into an array split by the spaces
// Step 2 - Reverse the characters of every item in the newly created array
// Step 3 - Join all items in the array as a string, split by the spaces
// Step 4 - Return the reversed string