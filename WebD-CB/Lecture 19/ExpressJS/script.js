
const express = require('express');
const app = express();
// This port is present on the machine
const PORT = 4444;

app.get('/',(req,res)=>{
    // console.log(req);
    res.send("Hello Welcome to my APP");
})

app.get('/hello',(req,res)=>{
    res.send("Hi! There we are using my app");
})

// This tells that if at the address https://localhost:4444/hello/1 a "GET" request is received, send the said response.
app.get('/hello/1',(req,res)=>{
    res.send("Hi! There we are using my app-1");
})

// This will start a kind of clock which at every tick will listen to any pings that happen on the server by any client.
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
});