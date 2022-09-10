// Task
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// Solution
function removeUrlAnchor(url){
  // Step 1
  let array = url.split("");
  // Step 2
  if (array.includes("#")) {
    // Step 3
    array.splice(array.indexOf("#"));
  } 
  // Step 4
  return array.join('');
}

// Step 1: Convert url into an array
// Step 2: Check if array includes() "#"
// Step 3: Find the indexOf() "#" in array and use splice() to remove item from there
// Step 4: Return the array while using join()