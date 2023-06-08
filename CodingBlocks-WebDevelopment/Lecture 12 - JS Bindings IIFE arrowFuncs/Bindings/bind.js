// Also a part of explicit binding.
let Person1 = {
    name: 'Vaibhav',
    marks: 90,
    isPass: function() {
        // Will output Person Object
        console.log(this);
        if(this.marks > 40) {
            console.log("Pass Hai")
            Person.certificate = true;
        } else {
            console.log("Fail hai")
            this.certificate = false;
        }
    } 
}

let Person2 = {
    name: 'Vaibhav',
    marks: 50,
    isPass: function() {
        // Will output Person Object
        console.log(this);
        if(this.marks > 40) {
            console.log("Pass Hai")
            Person.certificate = true;
        } else {
            console.log("Fail hai")
            this.certificate = false;
        }
    } 
}

function updatePersonCountry(country, age) {
    this.country = country;
    this.age = age;
}

// bind is done when we don't need to call it immediately.

let x = updatePersonCountry.bind(Person1, "India");
x(23);

console.log(Person1);

