// var and functions are hoisted to the top of the File, irrespective of where they were defined.
// However, for var, only their declarations are hoisted, their assignments occur only when their line is reached.
// but let is not hoisted.

// Able to call function before it was defined.
add(2, 3);
console.log(x);
console.log(y);
// This will give error that can't access 'let' before initialization.
// If not declared at all, will give error that variable is not defined.
console.log(z);

let z = 10;

function add(a, b){
    console.log(a+b);
}

var x = function(a,b){
    console.log(a/b);
}

var y = function(a,b) {
    console.log(a*b);
}

// Hoisting was basically used for research papers.
// But, JS' use cases increased, hoisting became a problem.
// To avoid releasing a totally new version of JS, 
// it was suggested to introduce a new variable type 'let', which 
// would function just as normal variables would in any other languages.
