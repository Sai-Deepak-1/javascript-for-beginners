// Template Literals in JavaScript

// Template literals are enclosed by backticks (`) instead of double or single quotes.
// They allow for multi-line strings and string interpolation with embedded expressions.

// Example of a multi-line string using template literals
const multiLineString = `This is a string
that spans across
multiple lines.`;

console.log(multiLineString);

// Example of string interpolation using template literals
const name = 'John';
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);

// You can also perform expressions inside template literals
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);