// Given an integral number, determine if it's a square number
// should work for some examples
// should work for random square numbers
// should work for random numbers

var isSquare = function(n){
  if ((Math.sqrt(n) * Math.sqrt(n) === n) && (Number.isInteger(Math.sqrt(n))) && (n >= 0)) {
    return true;
  } else {
    return false;
  }
//   return false; // fix me
}

console.log(isSquare(85)); // true