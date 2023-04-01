class Person{
    constructor(name, age, hobby, income) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        // This function would use income from its closure, but income in itself would be hidden
        this.taxLagega = function() {
            return income >= 7
        }
    }
    
    printName() {
        console.log("Name: ", this.name);
    }

    // Instead of the object, class will be used to call this function.
    // In other languages, p1.country would work, but in JS it won't work.
    static country() {
        console.log("Country: India");
    }

    // getter
    // This won't be used as p1.getAge()
    // It'll be used as a simple property.
    get getAge() {
        return this.age;
    }

    // Even setter is called as a property
    set setAge(age) {
        this.age = age;
    }
}

const p1 = new Person("Rohan", 24, "Music");
console.log(p1);
p1.printName();
// Below gives error
// p1.country();
Person.country();
console.log(p1.getAge)
p1.setAge = 25
console.log(p1.age)

console.log(p1.taxLagega());
console.log(p1.income); // undefined, because its been hidden

