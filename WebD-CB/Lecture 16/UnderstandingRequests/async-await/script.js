// https://cat-fact.herokuapp.com/facts
let URL = 'https://cat-fact.herokuapp.com/facts'

const factList = document.querySelector('.factList');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    showCatDetails(URL);
})

function showCatDetails(URL) {
    getDataFromUrl(URL)
    .then((data) => {
        addDataToList(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

async function getDataFromUrl(URL) {
    // This try-catch is the alternative to the catch from promises.
    try{
        // A much easier way to do the async stuff is use async-await syntax.
        // The function to be executed async gets the same keyword before its definition.

        // The below code won't move to the next line until its work is done.
        const res = await fetch(URL);

        // Can write synchronous code here.
        // It'll work after the first await is done, and before the second await starts.
        const receivedData = await res.json();

        // Create array of data that we need to add to list.
        const data = receivedData.map((d) => d.text);
        addDataToList(data);
    }
    catch(err) {
        console.log(err);
    }
}

function addDataToList(data) {
    data.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        factList.appendChild(li);
    })
}