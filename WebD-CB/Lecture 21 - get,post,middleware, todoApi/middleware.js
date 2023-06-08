const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

// To see the body data of a POST request
// Because we're sending the data in body in encoded format.
// So we need to convert it back to readable format
// Without this, it'll give an error.
app.use(express.urlencoded({extended:true}));

// This is a generic middleware.
// This runs for every path.
app.use((req, res, next) => {
    console.log("Inside Middlware 1");
    req.count = 1;
    // This will call the next function written in line, like another middleware, or a get request.
    next();
})

// This is a generic middleware.
// This runs for every path.
// The same request object used above is passed on here.
app.use((req, res, next) => {
    console.log("Inside Middlware 2");
    req.count++;
    // This will call the next function written in line, like another middleware, or a get request.
    next();
})

// Path: ['/listen', 'listen/b', 'listen/a/b/c'] works on these
// Path: ['/', '/listen1', 'liste2/b', 'listen1/a3/b/c'] doesn't work on these
app.use('/listen', (req, res, next) => {
    console.log("Alexa is converting audio to text");
    req.count++;
    // The below if uncommented will send back the response, and not move onto the /listen part.
    // res.send('Kar liya listen');
    // This will call the next function written in line, like another middleware, or a get request.
    next();
})

app.get('/listen', (req, res) => {
    res.send(`Hello World ${req.count}`);
})

app.get('/', (req, res) => {
    res.send(`Hello World ${req.count}`);
})

app.listen(PORT, () => {
    console.log("http://localhost:4444/")
})