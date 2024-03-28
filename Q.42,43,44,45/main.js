"use strict";
//Question 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a 
//function called make_great() that modifies the array of magicians by adding the 
//phrase the Great to each magician’s name. Call show_magicians() to see that the 
//list has actually been modified
let megicianNames = ["Ali", "Fahad", "Musa", "Arsalan", "Hammad"];
function show_magicians(great) {
    for (let item of megicianNames) {
        console.log(great, item);
    }
}
;
show_magicians("Hello, How are you Mr.");
//Question 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function 
//make_great() with a copy of the array of magicians’ names. Because the original 
//array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the 
//original names and one array with the Great added to each magician’s name.
let megicianNames1 = ["Ali", "Fahad", "Musa", "Arsalan", "Hammad"];
let megicianNamescopy = [...megicianNames1];
function show_magicians1(great) {
    let withGreatings = "";
    for (let item of megicianNames1) {
        withGreatings += `${great} ${item}\n`;
    }
    return withGreatings;
}
;
let myGreatings = show_magicians1("Hello");
let myArray = myGreatings.split(`\n`);
console.log(myArray);
console.log(megicianNames);
//Question 44
//Sandwiches: Write a function that accepts a array of items a person wants on a 
//sandwich. The function should have one parameter that collects as many items as 
//the function call provides, and it should print a summary of the sandwich that is
// being ordered. Call the function three times, using a different number of 
//arguments each time.
function sandwich(...item) {
    console.log("sandwich order");
    for (let i = 0; i < item.length; i++) {
        console.log(`- ${item[i]}`);
    }
}
console.log("Enjoy your sandwich.");
sandwich("Capsicum", "Tomato", "Chicken");
sandwich("Chicken", "Onion", "Tomato");
sandwich("Cabbage", "Cheese", "Mayo", "Chicken");
function creatcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = creatcar("Toyota", "Corolla", { color: 'Silver', year: "2024" });
console.log(mycar);
