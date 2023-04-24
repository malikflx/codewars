// Task
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Solution
function longest(s1, s2) {
  // Step 1
  let combinedString = s1 + s2;
  // Step 2
  let stringArray = combinedString.split("");
  // Step 3
  let uniqueArray = stringArray.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  // Step 4
  return uniqueArray.sort().join("");
}

// Step 1: Combine both strings
// Step 2: Turn strings into an array
// Step 3: Use reducers to check the accumulator against the current value. If the accumulator does NOT include the current value, add the current value to a new array.
// Step 4: Return the array sorted and converted to a string
