const { error } = require('console');
const fs = require('fs');
const path = require('path');
const file1 = 'FileA.txt';
const file2 = 'FileB.txt';

let filePath1 = path.join(__dirname, file1);
let filePath2 = path.join(__dirname, file2);


fs.readFile(
    filePath1,
    {
        encoding:'UTF-8'
    },
    (err, data) => {
        if(err) {
            throw new Error("Nahin padh paye");
        }
        let data1 = data;
        fs.readFile(
            filePath2,
            {
                encoding:'UTF-8'
            },
            (err, data) => {
                if(err) {
                    throw new Error("Nahin padh paye");
                }
                let data2 = data;
                console.log(data1, data2)
            } 
        )
    } 
)


