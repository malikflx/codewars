// Task
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Solution
function correct(string)
{
  // Step 1
	let stringArr = string.split('');
  // Step 2
  for (let i = 0; i < stringArr.length; i++) {
    // Step 3
    if (stringArr[i] === "5") {
      stringArr[i] = "S"
    }
    if (stringArr[i] === "0") {
      stringArr[i] = "O"
    }
    if (stringArr[i] === "1") {
      stringArr[i] = "I"
    }
  }
  console.log(stringArr);
  // Step 4
  return stringArr.join('');
}

// Step 1: Turn string into an array
// Step 2: Loop through array
// Step 3: If any of the characters, replace them with the correct letter
// Step 4: Return joined array