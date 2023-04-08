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

// If one line return statement, no need to write return explicitly
let mul = (a, b) => a*b;
console.log(mul(2, 3));

console.log(sum(10, 20));


// Note:- arrow functions' this will always point to window object, as they're stateless functions.
