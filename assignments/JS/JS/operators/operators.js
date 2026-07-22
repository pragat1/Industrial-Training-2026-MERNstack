/**************************************************
 * JAVASCRIPT OPERATORS – COMPLETE GUIDE
 **************************************************/

console.log("===== 1. Arithmetic Operators =====");

/*
 +   Addition
 -   Subtraction
 *   Multiplication
 /   Division
 %   Modulus (remainder)
 **  Exponentiation
*/

let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1
console.log(a ** b);  // 1000


console.log("\n===== 2. Assignment Operators =====");

/*
 =    Assign
 +=   Add and assign
 -=   Subtract and assign
 *=   Multiply and assign
 /=   Divide and assign
 %=   Modulus and assign
*/

let x = 5;
x += 2;  // x = x + 2
console.log(x); // 7

x -= 1;
console.log(x); // 6

x *= 2;
console.log(x); // 12

x /= 3;
console.log(x); // 4


console.log("\n===== 3. Comparison Operators =====");

/*
 ==    Equal to (value only)
 ===   Strict equal (value + type)
 !=    Not equal
 !==   Strict not equal
 >     Greater than
 <     Less than
 >=    Greater than or equal
 <=    Less than or equal
*/

console.log(5 == "5");    // true
console.log(5 === "5");   // false
console.log(5 != 3);      // true
console.log(5 !== "5");   // true
console.log(10 > 5);      // true
console.log(10 <= 10);    // true


console.log("\n===== 4. Logical Operators =====");

/*
 &&   AND
 ||   OR
 !    NOT
*/

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false


console.log("\n===== 5. Unary Operators =====");

/*
 +    Convert to number
 -    Convert to negative
 ++   Increment
 --   Decrement
 typeof
*/

let num = "10";

console.log(+num);       // 10 (string → number)
console.log(typeof +num); // number
console.log(-num);       // -10
console.log(typeof num); // string

let count = 5;
count++;
console.log(count); // 6

count--;
console.log(count); // 5


console.log("\n===== 6. Ternary (Conditional) Operator =====");

/*
 condition ? value_if_true : value_if_false
*/

let marks = 45;

let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);


console.log("\n===== 7. String Operators =====");

/*
 +   Concatenation
*/

let firstName = "Ramesh";
let lastName = "Sharma";

console.log(firstName + " " + lastName);


console.log("\n===== 8. Type Operators =====");

/*
 typeof   Returns data type
 instanceof  Checks object type
*/

console.log(typeof 123);        // number
console.log(typeof "Hello");    // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (JS bug)

let arr = [];
console.log(arr instanceof Array); // true


console.log("\n===== 9. Bitwise Operators =====");

/*
 &   AND
 |   OR
 ^   XOR
 ~   NOT
*/

console.log(5 & 1);   // 1 : AND
console.log(5 | 1);   // 5 : OR 
console.log(5 ^ 1);   // 4 : XOR 
console.log(~5);      // -6 : (-(n+1))


console.log("\n===== 10. Nullish & Optional Operators =====");

/*
 ??   Nullish Coalescing
 ?.   Optional Chaining
*/

let username = null;
console.log(username ?? "Guest"); // Guest

let user = {
  profile: {
    email: "test@gmail.com"
  }
};

console.log(user?.profile?.email); // test@gmail.com
console.log(user?.address?.city);  // undefined


console.log("\n===== 11. Spread Operator =====");

/*
 ...   Spread / Rest
*/

let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];
console.log(newNums);


console.log("\n===== END OF OPERATORS GUIDE =====");
