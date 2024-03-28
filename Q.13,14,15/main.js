//Question 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make 
//a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
//mMethod 1
var myTransport = ["Car", "Bike", "Bus", "Train", "Rickshaw"];
for (var i = 0; i < myTransport.length; i++) {
    console.log("I would like to own a ".concat(myTransport[i]));
}
//Method 2
myTransport.map(function (i) {
    console.log("I would like to own a ".concat(i));
});
//Question 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
//that includes at least three people you’d like to invite to dinner. Then use your list to print a message
//to each person, inviting them to dinner.
//Method 1
var friendsName = ["Ali", "Musab", "Hudaim", "Fatima", "Yashal", "Kiswah"];
for (var i = 0; i < friendsName.length; i++) {
    console.log("Dear ".concat(friendsName[i], "! I would like to invite you for dinner on Monday."));
}
//Method 2
friendsName.map(function (i) {
    console.log("Dear ".concat(i, "! I would like to invite you for dinner on Monday."));
});
//Question 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send 
//out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the
//name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you
//are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var friendsName1 = ["Ali", "Musab", "Hudaim", "Fatima", "Yashal", "Kiswah"];
console.log("Due to some reason Miss ".concat(friendsName1[3], " will not come on my dinner."));
friendsName1[3] = "Zoha";
for (var i = 0; i < friendsName1.length; i++) {
    console.log("".concat(friendsName1[i]));
}
