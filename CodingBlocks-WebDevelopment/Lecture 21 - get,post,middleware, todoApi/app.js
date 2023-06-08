const path = require('path');
const express = require('express');
const app = express();
const PORT = 8888;

// To see the body data of a POST request
// Because we're sending the data in body in encoded format.
// So we need to convert it back to readable format
// Without this, it'll give an error.
app.use(express.urlencoded({extended:true}));


// GET request using params
// http://localhost:4444/hello/rohan - use this to check
app.get('/hello/:name', (req, res) => {
    // res.send("Hello world");
    // The below is equivalent to "Hello" + req.params.name
    res.send(`Hello ${req.params.name}`);
}) 

// GET request using Query parameters
// http://localhost:4444/bye?name=rohan&age=25 - use this to check
app.get('/bye', (req, res) => {
    
    req.query.age ?
    res.send(`Bye, ${req.query.name}, age: ${req.query.age}`) :
    res.send(`Bye, ${req.query.name}`)
    
})

// POST Request

// We can't send post request using browser, we need to use POSTMAN.
// Now, the data is sent in and encoded format inside the body object which is present inside the req object.
app.post('/', (req, res) => {
    // This will be printed:-
    // { contact: '7888014497', email: 'rohanchhibba96@gmail.com' }
    console.log(req.body);
    
    // This is destructuring
    const {contact, email} = req.body;
    res.send(`Post Success ${contact} ${email}`);
})

app.listen(PORT, () => {
    console.log("http://localhost:4444/")
}) 