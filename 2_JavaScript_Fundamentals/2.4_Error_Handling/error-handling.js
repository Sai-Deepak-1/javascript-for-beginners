// Error handling in JavaScript

// Error handling in JavaScript is done through the use of try, catch, and finally blocks. Errors are thrown using the throw statement.

// The try block contains the code that may throw an error. If an error is thrown, the catch block will catch it and handle the error. The finally block will always execute, regardless of whether an error was thrown.

// The catch block can be used to catch specific types of errors, such as an error thrown by a specific function. This can be done by specifying the type of error in the catch block.

// For example, the following code will throw a ReferenceError and catch it in the catch block:

try {
  throw new ReferenceError("This is a reference error");
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Finally block executed");
}

// This will output:

// Caught error: This is a reference error
// Finally block executed

// In this example, a ReferenceError is thrown in the try block, caught in the catch block, and the finally block is executed.

// You can also create custom error objects by extending the Error object. This allows you to create custom error types with additional properties and methods.

// For example, you can create a custom error type called CustomError:

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
// You can then throw a CustomError object in your code:

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Finally block executed");
}
// This will output:

// Caught error: This is a custom error
// Finally block executed

// In this example, a CustomError object is thrown in the try block, caught in the catch block, and the finally block is executed.

// Error handling is an important part of writing robust JavaScript code. It allows you to gracefully handle errors and prevent your code from crashing when errors occur.
