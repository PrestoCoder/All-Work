// In JS, everything is an object.
// Thus, functions are also objects.

function person(name, hobby) {
    console.log(name);
    console.log(hobby);
}

person("Vaibhav", "Singing");

person.country = "India";
person.state = "Delhi";

// Now it is behaving as an object.
// But still, its type is function
console.log(person);
console.log(typeof(person))