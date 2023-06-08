let str = "Learning Coding";
// for(let i = 0; i<str.length; i++) {
//     console.log(str[i])
// }
// console.log(str)

let newStr = '';
for(let i = 0; i < str.length; i++) {
    newStr += (str[i] + '-');
}
console.log(newStr)

let index = str.indexOf("Coding"); // Returns 9
console.log(index);

for(let i of str){
    console.log(i);
}

let file = 'my.file.mp4';
console.log(file.split('.')); //['myfile', 'mp4']
console.log(file.split('.').pop()); //'mp4'
let format = file.split('.').pop();
// Checks all strings
// Returns index of the element in the last string where the format is present.
// Hence, in below, returns 3
index = ['jpg', 'png', 'webp', 'mp4', '111mp4'].indexOf(format);
if(index != -1) {
    console.log('Format sahi hai', index);
} else {
    console.log("Format sahi nahin hai");
}

