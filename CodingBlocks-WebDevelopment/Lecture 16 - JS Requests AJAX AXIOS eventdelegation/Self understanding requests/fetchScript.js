let URL = "https://cat-fact.herokuapp.com/facts";
const factList = document.querySelector('.factList');
const button = document.querySelector('button');

// fetch returns a promise, on which .then can be directly applied


// Using fetch in async await
button.addEventListener('click', (event) => {
    fetchUsingAsync();
})

async function fetchUsingAsync() {
    let response = await fetch(URL);
    let data = await response.json();
    data.forEach(dataElement => {
        let li = document.createElement('li');
        li.innerText = dataElement.text;
        factList.append(li);
    });  
}


// Using fetch as a promise
// button.addEventListener('click', (event) => {
//     fetch(URL)
//     .then( (response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         data.forEach(dataElement => {
//             let li = document.createElement('li');
//             li.innerText = dataElement.text;
//             factList.append(li);
//         });        
//     })
// })


// Fetch doesn't work with callbacks
// button.addEventListener('click', (event) => {
//     fetch(URL, (response) => {
//         console.log(json);
//         response.json((data) => {
//             console.log(data);
//         })
//     })
// })