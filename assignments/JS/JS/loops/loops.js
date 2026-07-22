/**************************************************
 * LOOP STATEMENTS IN JAVASCRIPT
 * Loops are used to repeat a block of code
 **************************************************/

console.log("===== LOOP STATEMENTS IN JAVASCRIPT =====");


/**************************************************
 * 1. FOR LOOP
 * Used when number of iterations is known
 **************************************************/

// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("For loop value:", i);
}


/**************************************************
 * 2. WHILE LOOP
 * Runs while condition is true
 * Condition is checked BEFORE execution
 **************************************************/

let count = 1;

while (count <= 5) {
  console.log("While loop value:", count);
  count++;
}


/**************************************************
 * 3. DO WHILE LOOP
 * Runs AT LEAST ONCE
 * Condition is checked AFTER execution
 **************************************************/

let num = 1;

do {
  console.log("Do-While loop value:", num);
  num++;
} while (num <= 5);


/**************************************************
 * 4. FOR...IN LOOP
 * Used to iterate over OBJECT keys or Array Indices
 **************************************************/

let student = {
  name: "Karan",
  age: 22,
  course: "CSE"
};

for (let key in student) {
  console.log(key, ":", student[key]);
}


/**************************************************
 * 5. FOR...OF LOOP
 * Used to iterate over ITERABLES (arrays, strings)
 **************************************************/

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
  console.log("Color:", color);
}

// for...of with string
let text = "JS";

for (let char of text) {
  console.log("Character:", char);
}


/**************************************************
 * 6. BREAK STATEMENT
 * Stops the loop completely
 **************************************************/

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // exits loop
  }
  console.log("Break example:", i);
}


/**************************************************
 * 7. CONTINUE STATEMENT
 * Skips current iteration
 **************************************************/

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skips 3
  }
  console.log("Continue example:", i);
}


/**************************************************
 * 8. NESTED LOOP
 * Loop inside another loop
 **************************************************/

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i =", i, "j =", j);
  }
}


/**************************************************
 * 9. ARRAY METHODS AS LOOPS
 **************************************************/

let numbers = [1, 2, 3, 4];

// forEach loop
numbers.forEach(function (value) {
  console.log("forEach value:", value);
});

// map loop (returns new array)
let squared = numbers.map(function (value) {
  return value * value;
});

console.log("Squared array:", squared);


/**************************************************
 * END OF LOOP STATEMENTS
 **************************************************/
console.log("===== END =====");
