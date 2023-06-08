let Person = {
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

// This will o/p Window object in Chrome console.
// This is Default Binding
console.log(this);

// The above will also create a key-value pair, key = certificate, and value = true or false.
Person.isPass();

// This is called Implicit Binding.
// this inside Person refers to Person.
console.log(Person);

// Analogous to window object, but not exactly the same.
// Will give error on global
console.log(global)
