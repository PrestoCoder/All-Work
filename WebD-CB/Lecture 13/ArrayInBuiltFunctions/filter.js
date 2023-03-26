let arr = [1, 2, 3, 4];

let newArr = arr.filter((val, index, arr) => {
    if(val % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(newArr)