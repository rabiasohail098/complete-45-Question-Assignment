//Question 1
//Install Node.js, TypeScript and VS Code on your computer.
console.log("Hello World");
//Question 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as,
//“Hello Eric, would you like to learn some Python today?”
var personName = "Eric";
var msg = "would you like to learn some Python today?";
console.log("Hello ".concat(personName, ", ").concat(msg));
//Question 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person = "Sohail";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
