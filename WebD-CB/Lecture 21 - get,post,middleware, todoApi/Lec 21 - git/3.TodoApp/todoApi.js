const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444

app.use(express.urlencoded({extended:true}));

let todos = [];

app.get('/gettodo',(req,res)=>{
    res.send(todos);
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

// When data sent this way, inside network of inspect,
// Request URL: http://localhost:4444/addtodo1?newtask=345345
// Data visible in url. Thus, not safe.
app.get('/addtodo1', (req, res) => {
    const {newtask} = req.query;
    todos.push(newtask);
    res.redirect('/gettodo');
})

// app.post('/addtodo',(req,res)=>{
//     const {newtask} = req.body;
    // todos.push(newtask);
//     res.redirect('/gettodo');
// })

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});