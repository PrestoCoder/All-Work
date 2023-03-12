// var is function scope, let is block scope
// Also, var and let from outside a function are accessible inside a function.
// If that function has a var with the same name inside the function, it will still keep using the outside var until var is overwritten.
// But if a let is declared anywhere inside the function, it will use the outside let only if the function doesn't
// have a let declared with the same name as the outside let.


// Re declarations for var is allowed.
var e = 10;
var e = 20;
// But not for let.
// let f = 20;
// let f = 2;

function fun() {
    // As x is var, it has a functional scope.
    // Thus, it will be hoisted inside the function only.
    var x = 10;
}

function fun2() {
    // var x, y hoisted
    if(true) {
        var x = 10;
    } else {
        var y = 5;
    }
    console.log(y);
}
let y = 2;
function fun3() {
    // let x, y not exactly hoisted
    if(true) {
        let x = 10;
    } else {
        let y = 5;
    }
    // Gives error, as y is restricted to block scope, and not hoisted either.
    console.log(y);
}

// var inside fun4 is allowing var a from outside to be printed inside.
// Although, var a from inside has been hoisted.
// Which is concerning.
var a = 10;
function fun4() {
    // This prints 10, which is value of a from outside the function
    console.log(a);
    var a = 10;
    var b = 100;
    console.log(b);
}

// However, let helps us dodge this issue
let c = 10;
function fun5() {
    // Gives error.
    // Had there been let c, then it would'nt have been accessible.
    console.log(c);
    c = 120;
    let d = 100;
    console.log(d);
}
console.log(c)
fun5();
// fun4();
// fun3();
// fun2();
// fun();
// Gives error, as x is restricted to the function
// console.log(x);


