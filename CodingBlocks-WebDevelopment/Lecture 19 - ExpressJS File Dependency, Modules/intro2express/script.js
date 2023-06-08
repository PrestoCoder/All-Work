const express = require('express');
const app = express();
const PORT = 4444;

// By default, this is a get request.
// Replacing with post won't work
// https://stackoverflow.com/questions/56129326/do-browser-send-page-request-as-get-http-method-for-all-page-requests
app.get('/',(req,res)=>{
    // console.log(req);
    res.send("Hello Welcome to my APP");
})

app.get('/hello',(req,res)=>{
    res.send("Hi! There we are using my app");
})

app.get('/hello/1',(req,res)=>{
    res.send("Hi! There we are using my app-1");
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
});