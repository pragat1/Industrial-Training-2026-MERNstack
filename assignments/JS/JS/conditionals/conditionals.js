/**************************************************
 * CONDITIONAL STATEMENTS IN JAVASCRIPT
 **************************************************/

console.log("===== CONDITIONAL STATEMENTS =====");


/**************************************************
 * 1. IF STATEMENT
 * Executes code only if condition is true
 **************************************************/
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}


/**************************************************
 * 2. IF ELSE STATEMENT
 * Executes one block if true, another if false
 **************************************************/
let marks = 35;

if (marks >= 40) {
  console.log("Result: Pass");
} else {
  console.log("Result: Fail");
}


/**************************************************
 * 3. IF ELSE IF ELSE
 * Used for multiple conditions
 **************************************************/
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}


/**************************************************
 * 4. NESTED IF
 * IF inside another IF
 **************************************************/
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Access Granted");
  } else {
    console.log("ID Required");
  }
}


/**************************************************
 * 5. SWITCH STATEMENT
 * Best when checking a single value
 **************************************************/
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}


/**************************************************
 * 6. TERNARY OPERATOR
 * Short form of if else
 **************************************************/
let number = 7;

let type = (number % 2 === 0) ? "Even" : "Odd";
console.log("Number is:", type);


/**************************************************
 * 7. TRUTHY & FALSY CHECK
 **************************************************/
let username = "";

if (username) {
  console.log("User exists");
} else {
  console.log("User does not exist");
}


/**************************************************
 * 8. RETURN INSIDE CONDITION (FUNCTION)
 **************************************************/
function checkAge(userAge) {
  if (userAge < 18) {
    return "Not allowed";
  }
  return "Allowed";
}

console.log(checkAge(22));


/**************************************************
 * END OF SCRIPT
 **************************************************/
console.log("===== END =====");
