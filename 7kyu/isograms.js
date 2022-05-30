// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// Solution

function isIsogram(str){
  // Step 1
  strArr = str.split("");
  // Step 2
  for (i = 0; i < strArr.length; i++){
  // Step 3
    for (j = i + 1; j < strArr.length; j++) {
      if (strArr[i].toLowerCase() === strArr[j].toLowerCase()) {
        return false;
      }
    }
  }
  // Step 4
  return true;
}

// Step 1: Turn string into an array
// Step 2: Loop through array and compare first item with next item
// Step 3: Compare Items and return false if they match
// Step 4: return true is they don't match