const { MongoClient} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const mongoConnect = ()=>{
    return client.connect()
        .then((client)=>{
            console.log(client);
        })
        .catch(err=>{
            console.log(err);
        })
}

module.exports.mongoConnect = mongoConnect;

// The below commented code is an alterntive way to achieve above.
// Basically we want to start the server only after mongoDB has been connected.
// So we want app.js to know when mongo is connected.
// For that we return promise of client.connect() so that server can be started in .then.

// async function main() {
// Use connect method to connect to the server
//   return await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);

// }

// main();