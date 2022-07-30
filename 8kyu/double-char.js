// Task
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Solution
function doubleChar(str) {
  let newStr = [];
  let strArr = str.split('');
  for (i = 0; i < strArr.length; i++) {
    newStr.push(strArr[i].repeat(2));
  }
  return newStr.join('');
}
