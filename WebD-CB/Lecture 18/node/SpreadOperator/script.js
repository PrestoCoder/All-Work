    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    // Spread operator different meanings in different contexts
    // In first scenario, it kind of iterates over the iterable, which in most cases an array.
    // Note:- objects are not iterable
    // For an array, ...arr spreads out the value, or iterates over it, as seen below.
    // As function parameter, the already spread out values get stored as an array.
    arr = [1, 2, 3, 4];

    arr2 = [...arr, ...arr];
    console.log(arr2);

    //Similar to **args in python, args is now an array
    function fun(...args) {
        // Prints the array, and the type (array) object.
        console.log(args, '\n', typeof args);
    }

    fun(1, 2, 3, 4, 5)