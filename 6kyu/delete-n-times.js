// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// Solution:
function deleteNth(arr,n){
  // Step 1:
  const occurences = {};
  return arr.filter(item => {
    // Step 2:
    if (occurences[item]) {
      occurences[item]++
    // Step 3:
    } else {
      occurences[item] = 1
    }
    return occurences[item] <= n
  })
  
}

// Step 1: store occurence of each item in an object.
// Step 2: if occurence already contains the item in the object, increase the count of the occurence by 1.
// Step 3: if occurence doesn't contain the item in the object, add a key with count of 1