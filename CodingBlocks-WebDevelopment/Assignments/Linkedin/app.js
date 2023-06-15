const path = require('path');
const PORT = 4444;
// const bootstrap = require('bootstrap')

// expressa
const express = require('express');
const app = express();

// Mongoose
const mongoose = require('mongoose');

// Hbs
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Sessions and Passport
// const session = require('express-session');
// const passport = require('./auth/passport');

// Miscellaneous
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//------------
app.get('/home', (req, res) => {
    res.render('home');
})

app.post('/creat-post', (req, res) => {
    let { postContent } = req.body;

})

//------------
// Connecting to DB
mongoose.connect('mongodb://127.0.0.1/projDB')
    .then(()=>{
        // Starting server
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err=>{
        console.log('Connection err: ',err);
    })