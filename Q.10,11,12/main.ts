// Question 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you 
// don’t have anything specific to write because your programs are too simple at this point, just add your 
// name and the current date at the top of each program file. Then write one sentence describing what the
// program does.



//This programe is about addition operator
console.log(10+5);

//This programe is about my favorite number
let fav_num: number = 45;
console.log("My favorite number is ",fav_num);


// Question 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element 
// in the list, one at a time.

let friends_Arr: string[] = ["Rabia","Sohail","Yashal","Kiswah","Hudaim"];
for (let i=0; i<friends_Arr.length; i++){
    console.log(friends_Arr[i]);
 }
 //Question 12
 //Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
 //name, print a message to them. The text of each message should be the same, but each message should 
//be personalized with the person’s name.

    let friendsArr1 = ["Rabia","Sohail","Yashal","Kiswah","Hudaim"];
    let message :string = "are you there?";
    for (let r=0; r<friendsArr1.length; r++)
    {
    console.log(friendsArr1[r]+" "+message);
}
