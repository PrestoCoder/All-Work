let arr = [1, 2, 3];

// forEach iterates over the array, and performs the same function using the current element.
arr.forEach((d) => {
    console.log(d);
})

arr.forEach((val, index, arr) => {
    console.log("Index :", index, ", Value : ", val, ", array = ", arr);
})

console.log(arr);
arr.meraLoop = function() {
    for(let i = 0; i < this.length; i++) {
        console.log(this[i]); // Implicit binding
    }
}
// Alternative method below
// arr.meraLoop = function() {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
arr.meraLoop();
// But the above meraLoop will be available to only arr.
// To make it available to all arrays, need to add this method to array's prototype.