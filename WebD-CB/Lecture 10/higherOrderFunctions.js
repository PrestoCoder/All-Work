// Languages like JS, which allow passing functions as arguments,
// and returning them too, are said to support higherOrderFunctions.js

function vehicle(car) {
    return car;
}

function fortuner() {
    console.log("Inside fortuner", a);
}

console.log(vehicle(fortuner)());
//-------------------------------------------

function movies() {
    function kuwaraBaap() {
        console.log("Kuwara Baap");
    }

    function jabWeMet() {
        console.log("Jab We Met");
    }

    return kuwaraBaap;
}

let movie = movies();
movie();