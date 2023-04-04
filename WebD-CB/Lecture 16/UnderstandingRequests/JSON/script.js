// JONS is nothing but a stringified version of the JS object. Whenever we need to send some info., we don't use JS object, but instead,
// JSON.

obj = {
    a:1,
    b:'a',
    c:[1, 2, 3, 4],
    d:{
        a1:true
    }
}

// TO convert Obj to JSON
console.log(JSON.stringify(obj));

let obj_json = JSON.stringify(obj);
// Converting JSON to js object.
console.log(JSON.parse.apply(obj_json));
