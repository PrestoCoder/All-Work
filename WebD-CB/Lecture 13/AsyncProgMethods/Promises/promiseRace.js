function nibbaBreakUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nibba Breakup done");
        }, 3000);
    })
}

function nibbiBreakUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nibbi Breakup done");
        }, 3030);
    })
}

function nipatGaye() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bacha hi nahin toh ab kya breakup");
        }, 3000)
    })
}

// Race takes multiple promises, and the one that executes first, its resolve is run and msg printed.
Promise.race([nibbaBreakUp(), nibbiBreakUp(), nipatGaye()]).then((msg) => {
    console.log(msg);
})

