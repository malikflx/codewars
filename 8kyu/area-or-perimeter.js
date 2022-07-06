// Task
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// Solution
const areaOrPerimeter = function(l , w) {
  // Step 1
  if (l != w) {
    return (l * 2) + (w * 2)
  } else {
    // Step 2
    return l * w
  }
  
};

// Step 1: check for equality between l and w. If l and w are not equal, add (l * 2) + (w * 2)
// Step 2: If l and w are equal multiply l and w