// https://www.npmjs.com/package/hbs

const path = require('path');
const express = require("express");
const app = express();
const PORT=4444;
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// Sending public folder.
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
// To set the folder from views to view, but unnecessary.
// app.set('views', 'view');
app.use(express.urlencoded({extended:true}));

app.get('/index', (req, res) => {
    // This is hbs file, we don't write extension, also we assume that the file is in views folder.
    // All this is done without JS and DOM manipulation.
    // Without hbs, we would've had to send axios.get from script.js,
    // and then receive the data, and then manipulate DOM.
    res.render('index', {
        title:"Yeh hai naya title",
        name: "Kartikey",
        hobby: "kuwara baap"
    });
})

let todos = [
    {task: 'Todo1', id:1},
    {task: 'Todo2', id:3},
    {task: 'Todo3', id:4},
    {task: 'Todo4', id:5},
    {task: 'Todo5', id:2},
];

app.get('/todos', (req, res) => {
    res.render('todos', {
        todos
    })
})

app.listen(PORT, () => {
    console.log("http://localhost:", PORT);
})