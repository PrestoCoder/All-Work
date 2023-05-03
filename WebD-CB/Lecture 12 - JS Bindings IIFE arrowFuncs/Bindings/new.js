function createPerson(name, hobby, age) {
    this.name = name
    this.hobby = hobby
    this.age = age
}

// Here, the above 'this' keyword is bound to window/global object
// Checked in Chrome Console and terminal as well:-
// window.name = "Vaibhav"
createPerson("Vaibhav", "Listerning to songs", 23);
// inside global, name = "Vaibhav"
// console.log(global);

// Using new keyword to create an actual object using the createPerson function.
// Using new keyword, the function will be used as a constructor.
let p1 = new createPerson("Vaibhav", "Listerning to songs", 23);
let p2 = new createPerson("Rohit", "Listening to sings", 22);
// It prints out the function used to create this object as well.
console.log(p1);
console.log(typeof(p1));    
console.log(p2);