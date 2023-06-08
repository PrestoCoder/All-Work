const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.setHeader('Set-Cookie', "loggedIn=true");
    // console.log(res.get('Set-Cookie'));
    // let cookie = res.get('Set-Cookie');
    // console.log(cookie.split('='));
    
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () => {
    console.log(`http://localhost:`+PORT);
}) 