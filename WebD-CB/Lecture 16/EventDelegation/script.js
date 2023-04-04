const container = document.querySelector('.container');
// const items = document.querySelector('.item');

// console.log('.items');

// ---------------------
// items.forEach((item) => {
//     item.addEventListener('click', (ev) => {
//         console.log("Clicked", ev.target.innerText);
//     })
// })
//------------------------

// The above method fails when a new element is added through JS after having added the event listeners.
// Also, it introduces multiple threads in form of WebAPIs, keeping a track of all elements being clicked or not.

// A solution to this problem is event Delegation, which can be applied to the container of the items on which we want
// to put eventListeners on.

container.addEventListener('click', (ev) => {
    console.log(ev.target.innerText);
})

// Now, if we add an item to the above container, the event Listener will be added to that new element as well.
const newItem = document.createElement('div');
newItem.classList.add('item-9');
newItem.classList.add('item');
newItem.innerText = 9;
container.appendChild(newItem);

// And also, if we click on the container itself, it'll now print text in all elements, as well as the text exlusive to the container only.