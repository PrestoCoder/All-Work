// Closure is only formed when a function is returned from inside a function.

function outerFun(){
    let money = 110;
    // Now, when the innerFun is returned, it carries alongwith it an object called closure.
    // That closure will carry alongwith a copy of all the variables in the scope of innerFun at the time,
    // it was declared.
    function innerFun(){
        money++;
        console.log(money);
    }
    return innerFun;
}

let fun = outerFun();
// Each time the function is called, the money bucket inside it gets incremented by 1.
// And because its never assigned a value inside the innerFun, its incremented value remains the same, until
// its tampered with again.
fun();
fun();
fun();
fun();
fun();



