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

function updatePersonCountry(Person, country) {
    Person.country = country
}

function updatePersonCountry2(country) {
    this.country = country
}

// The below is a valid method but it creates a copy of the object, which we could like to avoid.
updatePersonCountry(Person1, "India");
console.log(Person1);

// Instead we'd use the call function, its used with functions
// fun.call(obj, funArg1, funArg2).
updatePersonCountry2.call(Person2, "Hawaii")
console.log(Person2);

// Exactly similar to call is apply, the only diff being that apply takes i/p args in the form of array.
updatePersonCountry2.apply(Person1, ["Nigeria"]);
console.log(Person1);

