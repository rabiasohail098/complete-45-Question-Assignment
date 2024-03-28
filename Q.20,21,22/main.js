// Question 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers,
//countries, cities, languages, or anything else you’d like. Write a program that creates a list containing
// these items.
var cities = ["Karachi", "Islamabad", "Quetta", "Lahore", "Multan", "Peshawer"];
cities.forEach(function (i) {
    console.log(i);
});
/* Question 21
They think of something you could store in a TypeScript Object. Write a program that creates Objects
//containing these items.*/
var object = {
    Name: "Laptop",
    Color: "Black",
    Speed: "fast",
    Version: 8,
    Deal: true,
    instock: false,
    Price: 85000,
};
console.log(object);
// /*Question 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make
// //one happen. Change an index in one of your programs to produce an index error. Make sure you correct the
// //error before closing the program.*/
var guest = ["Arsalan", "Hammad", 56, "Rabia", "Fahad", 48, "Hudaim"];
console.log(guest[8]);
// /*Question 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
//  Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
var car = 'Toyota';
console.log("Is car=='toyota?' I predict True.");
console.log(car == 'toyota');
console.log(car == 'Toyota');
var person = 'Sohail';
console.log(person == "Majid");
console.log(person == "Sohail");
var fruit = "Apple";
console.log(fruit == "Apple");
var favNo = 56;
console.log(favNo == 78);
var city = "Karachi";
console.log(city == "Islamabad");
var deal = "Off";
console.log(deal == "Off");
var color = "Green";
console.log(color == "Green");
var gender = "Female";
console.log(gender == "male");
var day = "Monday";
console.log(day == "Sunday");
var month = "January";
console.log(month == "March");
