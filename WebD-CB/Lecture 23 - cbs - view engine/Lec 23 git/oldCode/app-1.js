const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
// This is a view engine.
// As we'll see, this is used for creating templates.
// We can simply change data on the template, and render it.
const hbs = require('hbs');

app.use(express.urlencoded({extended:true}));

// This is where components of webapges, like navbar, sidebar, will be stored
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname,'public')));
// This automatically sets views as the folder where hbs will look for index, and other .hbs files
app.set('view engine','hbs');

// This is if we want hbs to auto discover view folder instead of views.
// But apparent need to do that.
// app.set('views','view');

// Below, bcoz we gave it 'index', it'll go automatically to views to find the index file.
app.get('/index',(req,res)=>{
    res.render('index',{
        title: 'Todo App',
        name: 'Kartikey',
        hobby: 'Kuwara Baap Movie Dekhna'
    });
});

let todos = [
    {task: 'Swimming',id: 1},
    {task: 'Dancing',id: 2},
    {task: 'Reading',id: 3},
    {task: 'Movie',id: 4},
    {task: 'Gaming',id: 5}
];

// Will go to the views folder, and render todos.hbs using the given arguments.
// Here, the todos data can be retreived from db.
// Then initially, we had to use DOM manipulation to make that data appear.
// Here, we simply rendered it using hbs.
app.get('/gettodo',(req,res)=>{
    res.render('todos',{
        todos
    });
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});