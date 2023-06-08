let obj = {
    a:1,
    b:true
}
// This makes newObj whose prototype is obj. Kind of inheritance.
// Thus, this is used to link one object to the other, in a parent-child manner.
let newObj = Object.create(obj);
console.log(newObj);

console.log(newObj.a);
console.log(newObj.b);
console.log(newObj.__proto__ == obj);
console.log(newObj.prototype);

// Now let there be 2 functions. If we need to create one a parent of the other, we'll need to use Object.create.
// However, this process becomes tedious when there is multiple level inheritance.
// To simplify this process, syntax of class was introduced. This is not analogoud to OOP.
// More check on OneNote of Kartik Mathur.


