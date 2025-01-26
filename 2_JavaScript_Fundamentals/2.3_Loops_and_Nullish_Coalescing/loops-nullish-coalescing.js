// Example of a for loop
console.log("For Loop Example:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Example of a while loop
console.log("While Loop Example:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Example of a do-while loop
console.log("Do-While Loop Example:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// Example of a for...of loop
console.log("For...Of Loop Example:");
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}

// Example of a for...in loop
console.log("For...In Loop Example:");
const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`${key}: ${object[key]}`);
    }
}

// Example of nullish coalescing operator (??)
console.log("Nullish Coalescing Operator Example:");
let undefinedValue;
let nullValue = null;
let zeroValue = 0;
let emptyStringValue = "";

console.log(undefinedValue ?? "Default Value"); // Output: "Default Value"
console.log(nullValue ?? "Default Value"); // Output: "Default Value"
console.log(zeroValue ?? "Default Value"); // Output: 0
console.log(emptyStringValue ?? "Default Value"); // Output: ""