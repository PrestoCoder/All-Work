let a = 10;

let person = {
    name: 'Kartikey',
    hobby: 'Movie'
}

function hello() {
    console.log("Hello");
}

console.log("a.__proto__ == Number.prototype", a.__proto__ == Number.prototype);
console.log("a.__proto__.__proto__ == Object.prototype", a.__proto__.__proto__ == Object.prototype);
console.log("person.__proto__ == Object.prototype", person.__proto__ == Object.prototype);
console.log("hello.__proto__ == function.prototype", hello.__proto__ == Function.prototype);

// Native code, not accessible, same as in web browser
console.log(Number.__proto__)

// To allow a function to function for all data types, putting it in Object.prototype
Object.prototype.sayHello = function() {
    console.log("Hello");
}

// Different data types able to access sayHello from Object Prototype
hello.sayHello();
person.sayHello();

console.log(Number)
console.log(Number.__proto__ , Number.prototype)
console.log(Number.__proto__.__proto__, Number.prototype.prototype)
console.log(Number.__proto__.__proto__.__proto__) // null




