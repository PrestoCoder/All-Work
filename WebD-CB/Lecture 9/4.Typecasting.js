// Implicit typcasting occurs from bigger data type to smaller data type.
// Array -> String -> Number -> Boolean
// For example, comparing number to String, converts string to number.
// Automatically converts data type
// '==' is called lose equality operator
console.log(1=='1')

// Strict equality operator
// Compares data type alongwith value
console.log(1 === '1');
// This is true;
console.log('\t' == 0);
console.log('\n' == 0);

console.log("[] == 0: ", [] == 0);
console.log("\\t == [] :",  [] == '\t')

// '+' operator convert anything in JS into a number
// + converts [] to 0
// '+' converts [n] to n
// Can't convert a number. 
console.log("\\t == [] :",  +[] == '\t')
console.log(+[[[[[222222]]]]])

console.log("'' == 0",'' == 0);
// [] gets converted to ''
console.log('[] == 0',[] == 0);
