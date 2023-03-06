// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// Solution
// Step 1
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) {
    return false;
  }

  // Step 2
  let todaysDate = new Date(currentDate);
  let expiredDate = new Date(expirationDate);

  // Step 3
  if (todaysDate.getTime() <= expiredDate.getTime()) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// Step 1: Check to see if coupon codes match
// Step 2: Add the date strings into the Date object to be read as an actual date and not a string.
// Step 3: if the current date is less than or equal to the expired date, return true, else return false
