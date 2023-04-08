// This is jQuery's alternative on window.onLoad, it auto loads after DOM has loaded.
// $(function() {

// })

// Will get all elements with a particular class, or tag, or id.
// Thus, will return in an array.
const li = $('.item');
const h1 = $('h1');
const avengers = $('#avengers');
console.log(li);
console.log(h1);
console.log(avengers);

// Adds class color to all elements in li.---------
// li.attr('class', 'color');

// CRUD operations--------------------------------
// Add an element to the list.
const movieList = $('.movieList');
// This creates an element.
let li2 = $('<li>');
li2.text('Superman').attr('class', 'item');;
movieList.append(li2);

// Chaining in jQuery.
// In jS, b = 2 returns 2, can check in console.
// Thus, a = b = 2 makes a, b = 2, and returns 2 as well.
// This works as b = 2 returns 2, which is then assigned to a, which again returns 2.
// Similar to this works for jQuery as well. This is called Chaining.

// This adds class of name item to the newly created element.
movieList.append($('<li>').text('Superman Vaibhav').attr('class', 'item'));
let li3 = $('.item');
console.log(li3);

// $('li').each(function() { // This also works
li3.each(function() { 
    console.log($(this));
    let text = $(this).text();
    // For jQuery, 'this' is used to get element inside the 'each' function.
    $(this).text(text + ' - movie');
})

// Removes all elements in li3-------------------------
// li3.remove();

// EVENTS---------------------
setInterval(function() {
    $('h1').toggleClass('myColor');
}, 100)


$('h1').click((e) => {
    let target = $(e.target);

    // The below toggles the background color
    // if(target.hasClass('myColor')) {
    //     target.removeClass('myColor');
    // } else {
    //     target.addClass('myColor');
    // }
})


