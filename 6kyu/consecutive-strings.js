
// Task
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

// Note
// consecutive strings : follow one after another without an interruption

// Solution:
function longestConsec(strarr, k) {
  // Step 1
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return ''
  }
  let longestStr = '';
  let concatStr = '';
  // Step 2
  for (let i = 0; i < strarr.length; i++) {
    concatStr = strarr.slice(i, i + k);
    if (concatStr.join('').length > longestStr.length){
      longestStr = concatStr.join('');
    }
  }
  // Step 3
  return longestStr
}
  
// Step 1: Check for empty or 0 items
// Step 2: Loop through array and Concatenate first "k" string using slice method from i index to i + k index
// Step 3: Assign concatString as the longestString