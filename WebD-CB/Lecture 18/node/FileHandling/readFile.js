
const fs = require('fs');
const path = require('path');
const fileName = 'humanDetails.json';

let humans = [
    {name: 'Rohan', age:'23', hobby:'music'},
    {name: 'Vedant', age:'22', hobby:'velapanti'},
    {name: 'Avitrr', age:'25', hobby:'nuktacheeni'},
    {name: 'Dakshesh', age:'22', hobby:'timepass'},
]

console.log(__dirname);
let filePath = path.join(__dirname, 'Data', fileName);

fs.readFile(
    filePath,
    {
        encoding:'utf-8'
    },
    (err, data) => {
        if(err) throw new Error("Nahi padh paye")
        // This would be required if we don't give the encoding.
        //  Bcoz otherwise, it will return the data in hexa.
        console.log(data.toString());
        console.log("Sahi hai! Padh li file");
    }
)