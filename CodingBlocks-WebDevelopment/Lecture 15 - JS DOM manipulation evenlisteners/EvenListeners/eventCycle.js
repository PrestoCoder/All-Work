const grandfather = document.querySelector('.grandfather');
const father = document.querySelector('.father');
const mother = document.querySelector('.mother');

// Event propogates bottom to top, if argument true is passed in the addEventListener, like below.
mother.addEventListener('click', () => {
    console.log("mother ko pata chali")
})
// }, true) 

father.addEventListener('click', (event) => {
    console.log("father ko pata chali")
    // Will not propogate down
    event.stopPropagation();
})

grandfather.addEventListener('click', () => {
    console.log("grandfather ko pata chali")
})




// It is analogous to stack, the div on top feels the event first, and so on.