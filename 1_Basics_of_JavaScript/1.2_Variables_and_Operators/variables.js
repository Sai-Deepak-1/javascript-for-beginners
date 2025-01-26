// Variable declarations

// Using 'var'
var message = "Hello, Sai!";
console.log(message); // Output: Hello, Sai!

// Using 'let'
let text = "JavaScript is the best!";
console.log(text); // Output: JavaScript is the best!

// Using 'const'
const number = 10;
console.log(number); // Output: 10

/*===================================================================================================*/

// Re-declaration of variables

var message = "Hello, World!";
var message = "Updated Message";
console.log(message); // Output: Updated Message

let text1 = "Initial Value";
// let text1 = "Updated Value"; // Uncomment this line to see the error
console.log(text1); // Output: SyntaxError: Identifier 'text1' has already been declared

const number1 = 10;
// const number1 = 20; // Uncomment this line to see the error
// console.log(number1); // Output: SyntaxError: Identifier 'number1' has already been declared
// number1 = 30; // Uncomment this line to see the error
// console.log(number1); // Output: TypeError: Assignment to constant variable.