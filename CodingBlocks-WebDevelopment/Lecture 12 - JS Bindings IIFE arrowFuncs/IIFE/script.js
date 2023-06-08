// This is an IIFE
// (function sqrt(n) {
//     console.log(Math.sqrt(n));
// })(10)


let details = (() => {
    let person = {
        name:'Vaibhav',
        age: 20,
    }

    // This won't be accessible outside the IIFE.
    // Were able to hide it.
    function updateMarks(m) {
        person.marks = m;
    }

    function updateAge(a) {
        person.age = a;
    }

    updateMarks(90);
    console.log(person);

    return {
        updateAge: updateAge,
        // Returning just to see whether the value gets changed using updateAge function
        // If not passed, it'll completely be locked
        person:person
    }

})()

console.log(details)
details.updateAge(27);
console.log(details.person)