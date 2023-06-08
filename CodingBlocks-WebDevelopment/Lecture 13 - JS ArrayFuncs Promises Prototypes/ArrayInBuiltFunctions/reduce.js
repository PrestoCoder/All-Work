// Reduces the whole array into a single value.
let arr = [1, 2, 3, 4];

// reduce starts with:-
// accumulator = arr[0]
// val = 2, index = 1
// What we return gets stored in accum, and val and index are obtained by iterating over the loop.
let sum = arr.reduce((accum, val, index, ar) => {
    return accum + val
})

console.log(sum); // 10

// If we give a value by default to the accumulator, val = arr[0], index = 0.
let prod = arr.reduce((accum, val, index, ar) => {
    return accum * val
}, 10)

console.log(prod); // 240