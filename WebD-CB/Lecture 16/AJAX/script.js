// AJAX: Asynchronous Javascript and XML
// This is used when we don't want to refresh the page, and want to udpate data on the page.
// This is visible in the form of xhr in inspect element server response.

// 2 methods

// AJAX: Asynchronous JavaScript and XML
// XML? Puratan waqt mein data XML format mein bheja jaata tha, jo HTML se bhot similar tha.
// Par aaj ke samay mein data JSON mein bheja jaata hai.
// Par parampara ko banaye rakhne ke liye, 
// aur purana code break na ho isliye, XMLHttpRequest ka naam JSONHttpRequest nahin rakha gaya.
const URL = 'https://cat-fact.herokuapp.com/facts';
const xhr = new XMLHttpRequest();
const btn = document.querySelector('.btn');
const factsList = document.querySelector('.factsList');

// Request kaha aur kis type ki bhejni hai define karo
xhr.open("GET",URL);

// Request ko send kab krna hai?
btn.addEventListener('click',()=>{
    xhr.send();
})

// Request ke success par yeh chlega
xhr.onload = function(data){
    console.log(data);
    console.log(data.currentTarget.response);
    // Response JSON format mein hai, tabhi usko parse karke JSON object banana padhega.
    const res = JSON.parse(data.currentTarget.response);
    const factsData = res.map((d)=>d.text);
    console.log(factsData)

    addDataToList(factsData);
    // const data = res.text;
}

// Request ke fail hone par yeh chlega
xhr.onerror = function(){
    console.log("Lagg gai");
}

function addDataToList(data) {
    data.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        factsList.appendChild(li);
    })
}