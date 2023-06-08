// https://cat-fact.herokuapp.com/facts
let URL = 'https://cat-fact.herokuapp.com/facts'

const factList = document.querySelector('.factList');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    
    fetch(URL)
    .then((res) => {
        // This .json step is mandatory for converting the response to readable and workable data.
        // Check how this exactly works.
        return res.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach((d) => {
            console.log(d.text);
            let li = document.createElement('li');
            li.innerText = d.text;
            factList.appendChild(li);
        })
    })
    .catch((err) => console.log(err));
})
