// Creates connection
// Make this work
// (async function (){
//     const socket = await io();
//     console.log(socket.id);
//     socket.on('Hello', (msg) => {
//         console.log(msg);
//         socket.emit('Hello', 'Haan haan batao baat');
//     })

//     socket.on('Hello2', (msg) => {
//         console.log(msg);
//     })
// })()

const socket = io();
const btn = document.querySelector('#btn');
const msg = document.querySelector('#msg');
const list = document.querySelector('.msg-list');

btn.addEventListener('click', () => {
    socket.emit('client2server', {
        msg:msg.value,
        id:socket.id,
    })
})

socket.on('broadcastMessage', (msgObj) => {
    let msg = msgObj.msg;
    let id = msgObj.id;
    let li = document.createElement('li');
    li.innerText = msg + '\n' + id;
    list.appendChild(li);
})

