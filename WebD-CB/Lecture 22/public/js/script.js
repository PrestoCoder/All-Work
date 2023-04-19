// For running the script, we include it in the index.html
// This merely asks the browser to request for the script.js
// However, the browser asks for this file at the path http://localhost:4444/script.js
// However, we haven't take care of that in the server.
console.log("Inside Script.js");

const form = document.querySelector('form');
const taskList = document.querySelector('.taskList');
const newTask = document.querySelector('#newtask');

form.addEventListener('submit', async (ev) => {
    // If we don't do this, POST will be submitted by index.html, and it'll get a response from server.
    // However, we'll not be able to use that data to manipulate DOM.
    ev.preventDefault();
    let taskName = newtask.value;

    // Promise syntax, will have to remove async though.
    // axios.post('/addtodo', {
    //     newtask: taskName
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((err) => {
    //     console.log(err)
    // })

    try{
        let data = await axios.post('/addtodo', {
            newtask: taskName
        });
        let newItem = (data.data).pop();
        let listItem = document.createElement('li');
        listItem.innerText = newItem;
        taskList.appendChild(listItem);
        console.log(data.data);
    } catch(err){
        console.log(err);
    }
    newTask.value = '';
})