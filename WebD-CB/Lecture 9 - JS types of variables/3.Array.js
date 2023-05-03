// The heterogeneity is achieved using Doubly Linked Lists
var arr = ["Hello", 1, 2, true, "abc"];
for(var i = 0; i < arr.length; i++) {
    // console.log("Value at index", i, "is :-", arr[i]);
}

// arr[10] = "10th value";
// console.log(arr)
// console.log(arr[9]);

// Push, Pop, Unshift, Shift

// Returns the new length of array
// Adds new element at the end of the array
newLength = arr.push("Meri marzi main kuchh bhi karun")
console.log(arr, newLength)
// Returns the last element
// Removes element from the end of array
b = arr.pop();
console.log(arr, b)

// Returns the new length of array
// Adds element to the beginning of Array
newLength = arr.unshift(2);
console.log(arr, newLength)
// Returns the first element
// Removes element from the beginning of array
b = arr.shift();
console.log(arr, b);







