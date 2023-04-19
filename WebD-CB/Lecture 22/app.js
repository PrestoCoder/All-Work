const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
// This is a package that helps decode body inside request object.
const bodyParser = require('body-parser');

// app.use(express.urlencoded({extended:true}));
// This is used when we use axios.
// Axios sends key-value inside req, but in a format different from the one when we send it using the form itself.
// Hence, we need to use the below middleware.
// app.use(express.json());

// Body Parser is a specific package, which helps decoding req. object to obtain key value from body object.
// It is preferred over express, as express' function might get deprecated.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let todos = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

// To avoid sending js and css files one by one, we do this
// We create a folder public, and put all script and css files in it.
// What the below does is that is sends the public folder in one go.
// Thus, now, in the index.html, we need to put path as if we were inside the public folder
// And not the absolute or relative path compared to index.html.
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/script.js', (req, res) => {
//     res.sendFile(path.join(__dirname, 'script.js'));
// })

// app.get('/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'style.css'));
// })

app.get('/gettodo', (req, res) => {
    res.send(todos)
})

app.post('/addtodo', (req, res) => {
    const {newtask} = req.body;
    todos.push(newtask);
    res.redirect('/gettodo');
})

app.listen(PORT, () => {
    console.log("http://localhost:4444/")
})