/**
 * Created by Calcious on 10/10/16.
 */
"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var name  = "";
    while(name === ""){
        name = prompt("Hi there!  What is your name?");
    }
console.log(name);

//var userName;
//do{
//userName = prompt("What's your name?");
//} while (userName == null || userName.trim() == "");
//NOTE: Use .trim() to trim any empty space
//NOTE: null has to come first--otherwise it will short-circuit due to priorities.


// TODO: Show an alert message that welcomes the user based on their input.

alert("Greetings " + name);


// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var entry = confirm("Do you like pizza?");
if(entry){
    alert("Me too!");
} else {
    alert("That's too bad!");
}

