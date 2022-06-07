// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// Solution:
function disemvowel(str) {
  // Step 1
  let strArr = str.split('');
  // Step 2
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toLowerCase() === "a" || strArr[i].toLowerCase() === "e" || strArr[i].toLowerCase() === "i" || strArr[i].toLowerCase() === "o" || strArr[i].toLowerCase() === "u") {
      strArr[i] = '';
    }
  }
  // Step 3
  return strArr.join('');
}

// Step 1: Convert string into an array
// Step 2: Filter array for vowels
// Step 3: Join array without vowels