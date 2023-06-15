// Yaha hum code likhenge to connect our application with the database,
// So that we can perform the operations on our collections. 
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'myproject';

// Will store db object in this variable.
let _db;

const mongoConnect = ()=>{
    return client.connect()
        .then((client)=>{
            console.log("Connecting to mongodb");
            _db = client.db(dbName);
        })
        .catch(err=>{
            console.log(err)
        });
}

// Getter for _db object.
const getDB = ()=>{
    if(_db) {
        return _db;
    } else {
        return null;
    }
}

module.exports.mongoConnect = mongoConnect;
module.exports.getDB = getDB;