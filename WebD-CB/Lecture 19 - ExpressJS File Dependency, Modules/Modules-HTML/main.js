// Although these funcs are defined in lib1, lib2, but because all they alongwith main are
// included in the html file, each one of them gets access of each others code, as if in one single file.

console.log(add(1,2));
console.log(subtract(10,5));
