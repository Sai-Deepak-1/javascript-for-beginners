// Variable declarations

// Using 'var'
var message = "Hello, Geeks!";
console.log(message); // Output: Hello, Geeks!

// Using 'let'
let text = "JavaScript is the best!";
console.log(text); // Output: JavaScript is the best!

// Using 'const'
const number = 10;
console.log(number); // Output: 10


// Re-assignment of variables
var message = "Hello, World!";
message = "Updated Message";
console.log(message); // Output: Updated Message

let text1 = "Initial Value";
text1 = "Updated Value";
console.log(text1); // Output: Updated Value


// Block scoping
{
  let blockScoped = "Block Scoped Variable";
  console.log(blockScoped); // Output: Block Scoped Variable
}

{
  const anotherBlockScoped = "Another Block Scoped Variable";
  console.log(anotherBlockScoped); // Output: Another Block Scoped Variable
}

// 'var' is function-scoped, accessible outside the block
{
  var globalVariable = "Accessible Outside Block";
}
console.log(globalVariable); // Output: Accessible Outside Block
