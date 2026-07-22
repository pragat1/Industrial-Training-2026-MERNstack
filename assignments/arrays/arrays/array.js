// ================================
// ARRAY BASICS
// ================================

// 1. Creating an array
let students = ["Rahul", "Aman", "Neha", "Simran"];
console.log("Students:", students);

// 2. Length of array
console.log("Total students:", students.length);

// 3. Accessing elements
console.log("First student:", students[0]);
console.log("Last student:", students[students.length - 1]);

// 4. Mutability
students[1] = "Arjun";
console.log("After update:", students);

// 5. Loop using for
console.log("Using for loop:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// 6. Loop using for...of
console.log("Using for...of loop:");
for (let name of students) {
  console.log(name);
}

// 7. push()
students.push("Karan");
console.log("After push:", students);

// 8. pop()
students.pop();
console.log("After pop:", students);

// 9. unshift()
students.unshift("Priya");
console.log("After unshift:", students);

// 10. shift()
students.shift();
console.log("After shift:", students);

// 11. includes()
console.log("Is Neha present?", students.includes("Neha"));

// 12. indexOf()
console.log("Index of Neha:", students.indexOf("Neha"));
