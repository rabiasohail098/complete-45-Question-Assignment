//Question 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a 
//function called make_great() that modifies the array of magicians by adding the 
//phrase the Great to each magician’s name. Call show_magicians() to see that the 
//list has actually been modified

let megicianNames = ["Ali","Fahad","Musa","Arsalan","Hammad"];
function show_magicians(great:string){
    for (let item of megicianNames){
console.log(great,item);
    }
};
show_magicians("Hello, How are you Mr.");


//Question 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function 
//make_great() with a copy of the array of magicians’ names. Because the original 
//array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the 
//original names and one array with the Great added to each magician’s name.

let megicianNames1 = ["Ali","Fahad","Musa","Arsalan","Hammad"];
let megicianNamescopy = [...megicianNames1]
function show_magicians1(great:string){
    let withGreatings = "";

    for (let item of megicianNames1){
withGreatings += `${great} ${item}\n`
}
return withGreatings;
};
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


function sandwich(...item:string[]):void {
    console.log("sandwich order")
for (let i=0;i<item.length;i++){
    console.log(`- ${item[i]}`)
}

}
console.log("Enjoy your sandwich.");
sandwich("Capsicum","Tomato","Chicken");
sandwich("Chicken","Onion","Tomato");
sandwich("Cabbage","Cheese","Mayo","Chicken");

//Question 45
//Cars: Write a function that stores information about a car in a Object. The 
//function should always receive a manufacturer and a model name. It should then 
//accept an arbitrary number of keyword arguments. Call the function with the 
//required information and two other name-value pairs, such as a color or an 
//optional feature. Print the Object that’s returned to make sure all the information
// was stored correctly.


type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function creatcar (manufacture:string,model:string,optional:Record<string,any>): car {
    return {
    manufacture,
    model;
    ...optional
}
}
const mycar:car=creatcar("Toyota","Corolla", {color:'Silver',year: "2024"})
console.log(mycar);

