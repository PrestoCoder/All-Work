const btn = document.querySelector('.btn');

// But the problem with onclick like events is that only one function can be performed using onclick.
// However, using addEventListener, we can add any number of listeners.
// btn.onclick = () => {
//     alert("onClick event fire hua")
// }

// eventListener lagane ka tareeka
function clickFun() {
    alert('I am clicked')
}

btn.addEventListener('click', clickFun);

btn.addEventListener('dblclick', () => {
    alert('I am double clicked')
});

// eventListener hatane ka tareeka
setTimeout(function() {
    btn.removeEventListener('click', clickFun);
}, 2000)

// eventListener return an object to the callback.
para = document.querySelector('p');
para.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    event.target.classList.add('changeColor');
})

para.addEventListener('mouseleave', (event) => {
    console.log(event.target);
    event.target.classList.remove('changeColor');
})

