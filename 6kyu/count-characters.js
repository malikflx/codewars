// Task
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Solution:
function count (string) {  
  let occurrences = {};
  string.split('').forEach(function(char) {
    if (occurrences[char]) {
      occurrences[char]++
    } else {
      occurrences[char] = 1
    }
  })
   return occurrences;
}
