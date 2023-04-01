// In callbacks, the function currently running calls another function, which calls another, and so on.
// However, until the last function exits, all functions stay on the stack, and can lead to stack overflow.
// Thus, this chain of callbacks is called callback hell.

// Promises are a solution to this problem.
// Promises can have 3 states:- pending, fulfilled and rejected.
// pending:- Promise done, but not fulfilled/rejected.
// fulfilled:- Promise waala kaam kar diya.
// rejected:- promise kiya, par kaam nai kiya.

// Similar to when the first callback function nears end, it calls another call back function.
// promises too call callbacks, called resolve, when its own work is over.
freeHai = true;
let kalMilneAaungi = new Promise((resolve, reject) => {
    // The below code is executed as soon as the Promise is declared.
    setTimeout(function() {
        if(freeHai) {
            resolve("Milne aa gayi");
        } else {
            reject("Katt gaya")
        }
        // } else {
        //     // However the throwing of error will hault the whole program, and display error on terminal.
        //     throw new Error("Katt gaya");
        // }
    }, 3000);
})

// The below is called whenever resolve/reject is called.
// .then is called when resolve is called.
// .catch is called when reject is called.
kalMilneAaungi.then((msg) => {
    console.log(msg);
    // Whatever this returns, is automatically converted to a promise, this is a property of .then
    // This allows us to create a chain of .then.
    return "Everything is Done";
})
.then((newMessage) => {
    console.log(newMessage);
})
.catch((err) => {
    console.log(err);
})
