/**************************************************
 * INTRODUCTION TO STRINGS IN JAVASCRIPT
 **************************************************/

console.log("===== INTRODUCTION TO STRINGS =====");

// Strings are sequences of characters used to store text
// Strings can be created using single quotes, double quotes, or backticks

let str1 = "Hello World";
let str2 = 'JavaScript';
let str3 = `Learning Strings`;

console.log(str1);
console.log(str2);
console.log(str3);

// Length of a string using .length property
console.log("Length of str1:", str1.length);

// String indexing (starts from 0)
console.log("First character:", str1[0]);
console.log("Second character:", str1[1]);


/**************************************************
 * TEMPLATE LITERALS
 **************************************************/

console.log("\n===== TEMPLATE LITERALS =====");

// Template literals use backticks (`)
// They allow embedded expressions using ${}

let price = 10;
let item = "Pen";

// Dynamic string using template literals
console.log(`The price of the ${item} is ${price} dollars.`);

// Multiline string without using \n
let message = `
Welcome to JavaScript
This is a multiline string
Using template literals
`;

console.log(message);


/**************************************************
 * STRING METHODS IN JAVASCRIPT
 **************************************************/

console.log("===== STRING METHODS =====");

let text = "  JavaScript String Methods  ";

// toUpperCase() → converts string to uppercase
console.log(text.toUpperCase());

// toLowerCase() → converts string to lowercase
console.log(text.toLowerCase());

// trim() → removes whitespace from both ends
console.log(text.trim());

// slice(start, end) → extracts part of string (end is exclusive)
let slicedText = text.slice(2, 12);
console.log("Sliced text:", slicedText);

// concat() → joins strings
let firstName = "Karan";
let lastName = "Singh";
let fullName = firstName.concat(" ", lastName);

console.log("Full Name:", fullName);

// replace(oldValue, newValue)
// Replaces only the FIRST occurrence by default
let sentence = "I love JavaScript. JavaScript is fun.";
console.log(sentence.replace("JavaScript", "JS"));

// charAt(index) → returns character at given index
console.log("Character at index 3:", sentence.charAt(3));


/**************************************************
 * END OF STRING SCRIPT
 **************************************************/
console.log("===== END =====");
