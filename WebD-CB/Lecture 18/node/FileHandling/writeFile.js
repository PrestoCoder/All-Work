// This is similar to C++ STL.
// fs is a package that can handle file read, write, etc.
const fs = require('fs'); // fs - fileSystem
const path = require('path'); // To create file paths.
const fileName = 'humanDetails.json';

let humans = [
    {name: 'Rohan', age:'23', hobby:'music'},
    {name: 'Vedant', age:'22', hobby:'velapanti'},
    {name: 'Avitrr', age:'25', hobby:'nuktacheeni'},
    {name: 'Dakshesh', age:'22', hobby:'timepass'},
]

console.log(__dirname); // The folder the current file, i.e., writeFile is in.
// The folder we are putting the file in needs to be present before hand.
// Bcoz writing that file won't create the folder.
let filePath = path.join(__dirname, 'Data', fileName); // Joins paths, takes care of things like //, etc.

// Below is an Async function.
fs.writeFile(
    filePath, // name of file
    JSON.stringify(humans), // data to be input in file
    {                       // Some settings
        encoding: 'utf-8',
        flag:'w'            // Bcoz we're writing to that file.
    },
    (err) => { // Call back function
        if(err) throw new Error("Nahi likh paye")
        console.log("Sahi hai! Ho gya sab");
    }
)

// All node built-in callbacks are error first, i.e., their first argument is error.
// So, for all callbacks, we put a check that if we get an error, we throw it.
// Otherwise, we do the work.