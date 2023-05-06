function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.numLegs = 2;

function Employee(name, age, id, exp) {
    // let this = {};
    Person.call(this, name, age);
    this.id = id;
    this.exp = exp;
    // return this;
}
Employee.prototype.status = "jhand"

// Yeh Employee.prototype ka __proto__ Object.prototype se badlkar Person.prototype kardega
// But, yeh Employee.prototype object ko dobara Person constructor se create ni karega, bas uska .__proto__ change karega
Object.setPrototypeOf(Employee.prototype, Person.prototype);

let e = new Employee('rohan', '24', '007', 1.75);
console.log(e.numLegs)
console.log(Employee.prototype.__proto__);

// e.__proto__ = null;
console.log(e.hasOwnProperty)

// Same thing using classes

class PersonC{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Part of prototype
    numLegs = 2;
}

// Extends does two things. One it allows to use super() to mimic .call behaviour.
// And second, it does the setPrototypeOf work automatically
class EmployeeC extends PersonC{
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
    
    // Variables here are not Inside employee prototype
    // Have to follow the old.prototype.prop = ..., method to get it done
    //https://stackoverflow.com/questions/34185643/ecmascript-6-syntax-for-declaring-prototype-default-values-using-class
    status = "jhand"
}

let e2 = new EmployeeC('rohini', '24', '007.5')
console.log(EmployeeC.prototype)

// Object.create() - This takes the __proto__ we want for our object, and the properties we want inside our object

obj1 = {
    c: 2,
    b : 3
}

let a = Object.create(obj1, {
    name:{value: 'Merry'},
    age: {value: '23'}
})

console.log(a);
// Now, a will have __proto__ pointing to obj1. (It doesn't deep copy, change in obj1 reflects in __proto__ of a)







