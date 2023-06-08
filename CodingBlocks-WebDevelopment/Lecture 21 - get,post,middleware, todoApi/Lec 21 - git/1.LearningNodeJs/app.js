const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4444;

// To see the body data of a POST request
// If request format is x-www-form-urlencoded(postman), that is from form, then use below middleware
// Otherwise, for json, use json body parser
// Also, if we don't know the format, we can use both middlewares.
// It'll automatically work for both types.

// How are they both able to work together?
// This is bcoz urlencoded works on requests with bodies having format of urlencoded only.
// And so does bp.json, it works only for json req.body objects.
// Thus, they can't interfere with each other.
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/hello', (req, res) => {
    res.send("Hello Welcome Again");
})

// Params ke through data dena server ko
app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
})


// Query Parameters
app.get('/bye', (req, res) => {
    let str =
        req.query.age ?
            `Bye, ${req.query.name}, age: ${req.query.age}` :
            `Bye, ${req.query.name}`;
    res.send(str);
})

// POST REQUEST
// Do this using postman, encoded form data or json.
// choose parser accordingly
app.post('/',(req,res)=>{
    // console.log(req.body)
    const {contact,email} = req.body;
    res.send(`Post Success ${contact} ${email}`);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});