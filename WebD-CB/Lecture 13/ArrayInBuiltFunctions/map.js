let arr = [1, 2, 3, 4];

// newarr = [10, 20, 30, 40]
// Similar to mapping domain to range using a function
let newArr = arr.map((val, index, arr) => val*10)

console.log(arr)
console.log(newArr)
