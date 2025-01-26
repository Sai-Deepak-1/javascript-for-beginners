// Type conversion in JavaScript

// Converting Strings to Numbers
const a = "3";
const b = "10";

// Direct addition of strings results in concatenation
console.log(a + b); // Outputs: 310

// Convert strings to numbers using Number function
const aNumber = Number(a);
const bNumber = Number(b);
console.log(aNumber + bNumber); // Outputs: 13

// Example with Type Checking
const c = Number(a);
const d = Number(b);

console.log(typeof a); // Outputs: string
console.log(typeof b); // Outputs: string
console.log(typeof c); // Outputs: number
console.log(typeof d); // Outputs: number

// Converting Numbers to Strings
const num = 123;
const str = String(num);
console.log(typeof str); // Outputs: string

// Example with Type Checking
const num1 = 123;
const num2 = 456.78;
const str1 = String(num1);
const str2 = String(num2);

console.log(typeof num1); // Outputs: number
console.log(typeof num2); // Outputs: number
console.log(typeof str1); // Outputs: string
console.log(typeof str2); // Outputs: string

// Converting to Boolean
const str1Bool = "Hello";
const str2Bool = "";

console.log(Boolean(str1Bool)); // Outputs: true
console.log(Boolean(str2Bool)); // Outputs: false

const num1Bool = 10;
const num2Bool = 0;

console.log(Boolean(num1Bool)); // Outputs: true
console.log(Boolean(num2Bool)); // Outputs: false

// Example with Type Checking
const strBool = "Hello";
const numBool = 0;

console.log(Boolean(strBool)); // Outputs: true
console.log(Boolean(numBool)); // Outputs: false

// Practical Examples

// Example 1: Converting User Input from Text Area
const input = "42"; // User input as a string
const number = Number(input);

if (!isNaN(number)) {
    console.log(number + 8); // Outputs: 50
} else {
    console.log("Invalid input");
}

// Example 2: Checking Boolean Values
console.log(Boolean("Prakash")); // Outputs: true
console.log(Boolean("")); // Outputs: false
console.log(Boolean(0)); // Outputs: false
console.log(Boolean(100)); // Outputs: true
console.log(Boolean(-1)); // Outputs: true