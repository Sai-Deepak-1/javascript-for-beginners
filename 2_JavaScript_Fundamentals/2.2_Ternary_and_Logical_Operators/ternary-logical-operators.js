//Ternary Logical Operators in JavaScript
// Task 1
let a = 1;
let b = 2;
let result;
result = (a + b < 4) ? 'Below' : 'Over';
console.log(result);

// Task 2
let login = 'Employee';
let message;
message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(message);

// Task 3
let hour = 12;
let minute = 30;
let period;
period = (hour < 12) ? 'AM' : 'PM';
console.log(`It's ${hour}:${minute} ${period}`);