// Eg:- We're having maincourse, after maincourse is done, only then we'll order drinkgs
// In this example, drinks is the call back for main course

function MainCourse(drinksCallBack) {
    console.log("Khana shuru")
    setTimeout(() => {
        console.log("Khana khatam")
        drinksCallBack(sweets);
    }, 3000)
}

function drinks(sweetsCallBack) {
    console.log("Drinks shuru")
    setTimeout(() => {
        console.log("Drinks khatam")
        sweetsCallBack();
    }, 3000)
}

function sweets() {
    console.log("sweets shuru")
    setTimeout(() => {
        console.log("sweets over");
    }, 3000)
}

MainCourse(drinks);

// H.W.
// Downloading - 3sec
// Compress( + zip) - 4sec
// Upload -> 3sec