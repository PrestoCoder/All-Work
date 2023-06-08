// In javascript, objects have key value pairs

let obj = {
    a:true,
    b:"Hello",
    c:110.11,
    3:3,
    'ek key':'ypyp'
}

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);
// Won't work
// console.log(obj.3);
// console.log(obj.'ek key')

// console.log(obj['a']);
// console.log(obj['b']);
// console.log(obj['c']);
// console.log(obj['3']);
// console.log(obj['ek key']);

// for-in loop accesses the keys of the object
for(i in obj){
    console.log(i, ":", obj[i]);
}