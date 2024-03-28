// Question 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
// prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = "Toyota"
console.log(car=="toyota"); //I predict its false.
let numb = 89;
console.log(numb>=67);// true
let fruit = "Mango"
console.log(fruit=="Apple") // false
let color = "Red";
console.log(color!="Blue"); // false
let student = true;
console.log(student==true) //true
let day = "Saturday";
console.log(day=="friday") // false
let months = "April";
console.log(months!=="April"); //true
let gender = "female";
console.log(gender=="female"); //true
let deal = false;
console.log(deal != false); //false
let person = "Sohail";
console.log(person==="Sohail");

// // //Question 24


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
//comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Tests for equality and inequality with strings
 let name1: string = "Ali";
let name2: string = "Hassan";
console.log(name1==name2); //I predict its false.
console.log(name1!=name2); //I predict its true.
let num1: number = 56;
let num2: number = 56;
console.log(num1==num2); // I predict its true.
console.log(num1!=num2); // I predict its false.

// Tests using the lower case function
let guest : string = "sohail";
console.log("sohail"===guest);// I predict its true.

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// // and less than or equal to

let number: number = 76;
let number2: number = 65;
console.log(number==number2); // I predict its false. .  
console.log(number!=number2); // I predict its true. 
console.log(number>76); // I predict its false. 
console.log(number2<76); // I predict its true. 
console.log(number>=number2); // I predict its true. 
console.log(number<=number2); // I predict its false.

//Tests using "and" and "or" operators

 console.log(number>65 && number2!==76); // I predict its true.

 console.log(number==65 || number2>76);// I predict its false.

//  Test whether an item is in a array.

let item: string [] = ["Arsalan","Hammad","Hani","Shanzay","Ahmed"];
console.log(Array.isArray(item));//I predict its true.

// Test whether an item is not in a array

let colors: string = "Blue";
console.log(Array.isArray(colors));

// Question 25


//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 
//'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
//just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)

let alien_color: string = "green"
if (alien_color=="green"){
    console.log("The player just earned 5 points");
}else{
    console.log()
}