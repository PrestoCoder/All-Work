const { error } = require('console');
const fs = require('fs');
const path = require('path');
const file1 = 'FileA.txt';
const file2 = 'FileB.txt';

let filePath1 = path.join(__dirname, file1);
let filePath2 = path.join(__dirname, file2);
let destFilePath = path.join(__dirname, "sorted.txt");
let destFilePath2 = path.join(__dirname, "sorted.json");


// We can't do let data1 = readFile, let data2 = readfile, and then operate on them.
// This is because, both readfiles are callbacks, and we are asking the '=' operation to happen outside callbacks,
// which makes no sense.

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
                // Sorting data of both files combined
                // parseInt converts a string to a number.
                // In a string/array of strings, with multiple numbers, it returns the first one
                let fullData = data1 + '\n' + data2;
                let dataArray = fullData.split('\n');
                let numArray = [];
                dataArray.forEach((strNum) => {
                    // By default, .sort sorts treating elements of array as strings, even if they are not.
                    // When the sort() function compares two values, it sends the values to the compare function,
                    // and sorts the values according to the returned (negative, zero, positive) value.
                    // If the result is negative, a is sorted before b.
                    // If the result is positive, b is sorted before a.
                    // If the result is 0, no changes are done with the sort order of the two values.
                    numArray.push(parseInt(strNum));
                })
                sortedArray = numArray.sort((a, b) => {
                    return a - b;
                });
                // console.log(sortedArray);
                // We can only write a string to a file.(thats why we do stringify to js object, before writing to a file)
                // An alternative method to convert any variable to string.
                strArray = sortedArray + "";
                // strArray = sortedArray.toString();
                // Writing the sorted array to a file.
                fs.writeFile(
                    destFilePath,
                    strArray,
                    {
                        encoding: 'utf-8',
                    },
                    (err, data) => {
                        if (err) throw new Error("Nahin Likh Paye Sorted array ko");
                        console.log("ho gya sab")
                    }
                )
                // Writing the array to a json
                fs.writeFile(
                    destFilePath2,
                    JSON.stringify(sortedArray),
                    {
                        encoding: 'utf-8',
                    },
                    (err, data) => {
                        if (err) throw new Error("Nahin Likh Paye Sorted array ko");
                        console.log("ho gya sab - json")
                    }
                )

            }
        )
    } 
)


