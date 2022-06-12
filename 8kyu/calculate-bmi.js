// Write function bmi that calculates body mass index (bmi = weight / height^2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Solution:
function bmi(weight, height) {
  const currentBmi = weight / Math.pow(height, 2);
    if (currentBmi <= 18.5) {
      return 'Underweight'
    } else if (currentBmi <= 25.0) {
      return 'Normal'
    } else if (currentBmi <= 30.0) {
      return 'Overweight'
    } else {
      return 'Obese'
    }
}