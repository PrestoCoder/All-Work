const path = require('path');
const PORT = 4444;

const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, 'public')));

// This won't be printed as client hasn't yet requested server to create a socket.
// Only when I do io() in chrome console will the below be printed in the terminal.
// Through this we can't access other routes on the server, that req-res only will do.
// And thus, can communicate through the newly created socket without any permission.
// io.on('connection', (socket) => {
    // console.log(socket);
    // Emits and event calle "Hello", and the message we sent with it is "World"
    // On Client side, we will put an event listener that on "Hello", listen.
//     socket.emit("Hello", "Ek baat batani hai");
//     socket.on("Hello", (msg) => {
//         console.log(msg);
//         socket.emit("Hello2", "Aaj sockets padha");
//     })
    
// });

// socket.on('sendmessage', (msg) => {
//     console.log(msg);
//     socket.emit('msgreceived', "Success");
// })

users = {};

io.on('connection', (socket) => {
    socket.on('client2server', (msgObj) => {
        io.emit('broadcastMessage', msgObj);
    })
})

server.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});

