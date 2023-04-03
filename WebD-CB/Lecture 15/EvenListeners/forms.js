const form = document.querySelector('form');
const inp = document.querySelector('#inp');
const inp1 = document.querySelector('#inp1');

form.addEventListener('submit', (event) => {
    // prevent default is required because otherwise on submit button press, form will get submitted
    // and the site will get refreshed, erasing the console and the input elements.
    // This will stop the site from getting refreshed.
    event.preventDefault();
    
    console.log(inp.value);
    console.log(inp1.value);

    // This is required as due to preventDefault, the form didn't get submitted.
    // And hence, the input values didn't get erased.
    inp.value = '';
    inp1.value = '';
})