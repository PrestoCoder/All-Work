// Arrow functions -> Are Lambda functions
// Lambda functions are functions that give the same output for same inputs.
// Thus, they're dependent only on the input.
// In JS, lambda functions can be made with arrow functions.
// For now, arrow functions are simply another way to create functions.

let fun = () => {
    console.log("Having fun");
}

fun();

let sum = (a, b) => {
    return a+b;
}

console.log(sum(10, 20));
