// This window.onLoad would make the script.js work after loading of window, and thus, after HTML is rendered.
// This is the standard way.
// window.onLoad = function () {
    // Steps to perform DOM manipulation:-
    // 1. Pick an element to perform some operation

    // Pick using Tag name
    let lists = document.getElementsByTagName('li'); // Returns an array
    console.log(lists);

    // Pick using ID
    const para1 = document.getElementById('para1');
    console.log(para1);
    
    // Pick using class
    const allPara = document.getElementsByClassName('para');
    console.log(allPara);

    // Pick using query selector
    // Picks the first tag para1, and returns
    // const paras = document.querySelector('p');

    const paras = document.querySelectorAll('p');
    console.log(paras);

    const item1 = document.querySelector('.listItem1');
    console.log(item1);

    const paragraph1 = document.querySelector('#para1');
    console.log(paragraph1);

    // Reading value of an element
    console.log(item1.innerText);
    console.log(item1.innerHTML);

    // Changing the value of an element
    item1.innerText = 'Ironman'
    item1.innerHTML = '<b>Ironman</b>'

    // Adding a new element
    const movieList = document.querySelector('.list');
    console.log(movieList);
    movieList.innerHTML += '<li class = "listItem4">Added Movie</li>'

    // However, the above is a bad way of adding elements, as it'll create all list elements again, and then render it.
    // Thus, for adding 1 element, O(n^2) is the complexity.
    // This can be witnessed by running the above code in the console, and observing the HTML.

    // A better way is:_
    // 1. Ek naya empty element banao
    let li = document.createElement('li');

    // 2. Element ke andar ki value update karlo
    li.innerText = "Hulk";

    // 3. jaakar iss element ko parent ke andar append kardo
    movieList.appendChild(li);

    // If we now run this code in the console, and observe HTML, it'll add only 1 element.
    // Thus, now the complexity is O(n).

    // Delete an element
    let item2 = document.querySelector('li')
    movieList.removeChild(li);
// }

