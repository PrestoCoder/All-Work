// This doesn't block the browser

setTimeout(function() {
    console.log("Welcome to CB")
}, 3000)


// WebAPI keeps returning onto the callback queue after 1 sec.
// Check if this setInterval is pushed only once onto the webAPI or multiple times. (?)
// id can be used to break the interval loop
let id = setInterval(function() {
    console.log("printed after interval")
}, 1000)

setTimeout(function() {
    clearInterval(id);
}, 5000)

