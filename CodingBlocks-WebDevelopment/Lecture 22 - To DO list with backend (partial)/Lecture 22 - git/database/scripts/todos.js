const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'..','data','todos.json');

class TodosDB {
    static addTask(task) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    // This process of reading the entire JSON,
                    // And then updating it is time consuming, 
                    // more evidently when the json's size becomes huge.
                    // However, this is the only way to update the json,
                    // if this file method is to be used for storing data.

                    // Converting json to JS array of objects
                    let todos = JSON.parse(data);
                    todos.push(task);
                    
                    // Writing the updated array in the form json, back in the same file.
                    fs.writeFile(
                        filePath,
                        JSON.stringify(todos),
                        (err)=>{
                            if(err) return reject(err);
                            resolve("Task Added Successfully");
                        }
                    )
                }
            )
        })
    }

    static getTask() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {
                    encoding:'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    // This return JS array, after parsing json.
                    resolve(JSON.parse(data));
                }
            )
        })
    }
}

module.exports = TodosDB;