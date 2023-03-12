// 1st way of creating functions---------------------------------------

function helloWorld(a, b) {
    console.log("Hellow World");
}

helloWorld();

function add(a, b) {
    return a+b;
}

let ans = add(120, 12.31);
console.log(ans);

// 2nd way of creating functions--------------------------------------
// Functions are also data types in JS, similar to Number, string, boolean, objects, etc
// Just like numbers, strings, functions can also be stored in side variables.

// Here mul itself doesn't have an identity.
// We can avoid writing mul altogether.
let x = function mul(a, b) {
    return a * b;
}
console.log(x(2, 3));
console.log(x);
console.log(x.toString());

let y = function(a, b) {
    return a - b;
}
console.log(y(3, 1));
console.log(y);
console.log(y.toString());