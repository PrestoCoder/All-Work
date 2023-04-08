const list = document.querySelector('ul');

// Event listeners
// Controlling what happens when 
// up-down arrow keys, 
// cross
// and the checkbox are clicked.
list.addEventListener('click', (event) => {
    
    var target = event.target;
    let targetType = target.getAttribute('class');
    let listItem = target.parentElement.parentElement;
    if(targetType === "deleteButton") {
        listItem.remove();
    } else if(targetType === "upArrow") {
        list.insertBefore(listItem, listItem.previousElementSibling);
    } else if(targetType === "downArrow") {
        list.insertBefore(listItem.nextElementSibling, listItem);
    }
})


// Adding task when the button is pressed
let inputBox = document.querySelector('.inputTask');
document.querySelector('.addTaskButton').addEventListener('click', (event) => {
    // Inner text/html doesn't work here
    let text = inputBox.value;
    console.log(text);
    let newListItemHTML = `
        <div class="taskMain">
            <input class = "checkTask" type="checkbox">
            ${text}
        </div>
        <div class="taskButtons">
            <span class="upArrow">⬆</span>
            <span class="downArrow">⬇</span>
            <span class="deleteButton">❌</span>
        </div>
    `;
    let newListItem = document.createElement('li');
    newListItem.classList.add('item');
    newListItem.innerHTML = newListItemHTML;
    list.appendChild(newListItem);
})

