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

function getDataFromUrl(URL) {
    // The .then in the above function is the resolve of the below promise.
    // However, there is no strict need to return a Promise, as the return res.json itself will be returning a promise.
    // Both are correct approaches.
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((err) => reject(err));
    })
}

function addDataToList(data) {
    data.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d.text;
        factList.appendChild(li);
    })
}