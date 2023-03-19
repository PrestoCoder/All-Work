// This blocks the browser

function waitASec() {
    let startTime = new Date().getTime();
    while(startTime + 1000 > new Date().getTime()) {

    }
}

function waitNSec(n) {
    for(let i = 0; i < n; i++) {
        waitNSec();
    }
    console.log("Welcome To sight")
}

waitNSec(3);