// JavaScript Fundamentals: Conditional Statements

// 1. If Statement
// 2. If Else Statement
// 3. Else If Statement
// 4. Switch Statement

// 1. If Statement
// Syntax
if (condition) {
    // code block
}

// Example
let age = 18;
if (age >= 18) {
    console.log('You are eligible to vote.');
}

// 2. If Else Statement
// Syntax
if (condition) {
    // code block
} else {
    // code block
}

// Example
let age1 = 17;
if (age1 >= 18) {
    console.log('You are eligible to vote.');
} else {
    console.log('You are not eligible to vote.');
}

// 3. Else If Statement
// Syntax
if (condition1) {
    // code block
} else if (condition2) {
    // code block
} else {
    // code block
}

// Example
let age2 = 17;
if (age2 >= 18) {
    console.log('You are eligible to vote.');
} else if (age2 < 18 && age2 >= 13) {
    console.log('You are a teenager.');
} else {
    console.log('You are a child.');
}

// 4. Switch Statement
// Syntax
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}

// Example
let day = 3;
switch (day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day');
}