// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// Solution:
function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      score += 0;
    } else if (array2[i] === array1[i]) {
      score += 4;
    } else {
      score -= 1;
    }
  }
  if (score < 0) {
    return 0;
  } else {
    return score;
  }
}

// Step 1: Loop over the array of correct answers and compare the index of both student and correct answers.
// Step 2: For every index that has a matching value in both of the arrays, add 4 to score, if not decrease score by 1. If it's blank, don't modify score.
// Step 3: Check to see if the final score is greater than 0, if not, return 0 as the score.
