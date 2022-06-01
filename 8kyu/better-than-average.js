// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


// Solution:
function betterThanAverage(classPoints, yourPoints) {
  
  // Step 1:
  const averagePoints = (classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / (classPoints.length)
  
  // Step 2:
  if (yourPoints > averagePoints) {
    return true;
  } else {
    return false;
  }
}

// Step 1: Find sum of all points in array and divide it by the number of items in the array. Assign this to averagePoints.
// Step 2: Compare the result from step above and the value of yourPoints. If yourPoints greater than averagePoints return true, else false