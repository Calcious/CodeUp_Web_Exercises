/**
 * Created by Calcious on 10/10/16.
 */
// function isOdd(number){
//     var result = number % 2;
//     if(result != 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// isOdd(4);

// function square(number){
//     var result = number * number;
//     return result;
// }
// console.log(square(5));
//
"use strict";

var myNameIs = 'Bob'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
function sayHello(name){
    console.log("Hello " + name)
}
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
function isOdd(number){
    var number = (number % 2 != 0) ? console.log("It's odd"):console.log("It's even");
    //OR return (number % 2 != 0) ? console.log("It's odd"):console.log("It's even");
    //OR return (number % 2 != 0) ? true:false;
}
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.






//write a function called add(a,b)
function add(num1, num2){
    return num1 + num2;
}
console.log(add(1,2));

//subtract (a,b)
function subTract(num1, num2){
    return num1 - num2;
}
console.log(subTract(8,2));

//multiply (a,b)
function mulTi(num1, num2){
    return num1 * num2;
}
console.log(mulTi(5,2));

//divide (a,b)
function divIde(num1, num2){
    return num1 / num2;
}
console.log(divIde(1,2));

//using these functions, write a square(number)
function square(num){
    return num * num;
}
console.log(square(4,6));

//write sumOfSquares(a,b)
function sumofSquares(num1, num2){
    return square(num1)+ square(num2);
}
console.log(sumofSquares(10,25));

//add functionality to each of these functions that checks if both numbers are numeric
//and outputs a string that says, "inputs must be numeric" if they aren't numbers

//add functionality to divide() that checks if the divisor is zero and outputs,
//"divisor must not be zero."