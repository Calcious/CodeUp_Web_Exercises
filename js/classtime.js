/**
 * Created by Calcious on 10/12/16.
 */

//EXAMPLE of "mapping" or applying a function to every element and pushing results to the new array.


var newArray = [];
[1, 2, 3, 4, 5].forEach(function (element, index, array) {
    newArray.push(element + 1);
});


//EXAMPLE of "filtering" with a forEach.  Filtered elements are pushed onto arrayOfEvents.

function isEven(number) {
    return number % 2 == 0;
}

var arrayOfEvens = [];
[1,2,3,4,5].forEach(function (element, index, array) {
    if(isEven(element)){
        arrayOfEvens.push(element);
    }
});

//EXAMPLE of using a forEach to "accumuate" or to "reduce" to a single value.

var sum = 0;
[1,2,3,4,5].forEach(function(element, array){
    sum += element;
});


//Use forEach in each function you build.

//EXERCISE 1
//Write a function that returns a new array of strings with the first letter uppercased.
//Take an array of strings containing the names in lowercase and uppercase only the first character.
//Is this operation a type of map, filter, or reduce usage of a forEach
//newArray should be ['John', 'Paul', 'Ringo', 'George', 'Yoko',];
var arrayOfNames = ['john', 'paul', 'ringo', 'george', 'yoko'];

function namesUpperCase() {
    var newArray = [];
    var firstLetter;
    var restOfWord;
    arrayOfNames.forEach(function (element) {
        firstLetter = element.charAt(0).toUpperCase();
        restOfWord = element.substring(1);
        newArray.push(firstLetter + restOfWord);
    });
    return newArray;
}
console.log(namesUpperCase());


//SOLUTION -- EXERCISE 1
//function capFirstLetter(arrayOfStrings){ //add this line to make it a function for ANY array of strings
//names.forEach(function(name, index) {
//var name = "bobby";
//var firstLetterCapitalize = name[0].toUpperCase();
//var restOfString = name.substring(1);
//var fullName = firstLetterCapitalize + restOfString;
//names[index] = fullName;
//});
//console.log(names);
//}


//EXERCISE 2
//Write a function that takes an array of numbers 1-8
//and returns the product of all the numbers
//is this type of map, filter, or reduce usage of the forEach?

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function addNumbers() {
    var sum = 0;
    numbers.forEach(function (element) {
        sum += element;
    });
    return sum;
}

console.log(addNumbers());


//EXERCISE 3
//Write a function that returns a string containing the HTML necessary
//for an unordered list with an <li> for each person on your names array
//is this a type of map, filter, or reduce usage of the forEach?

//The SURE-Fire way to do stuff :|
//Foreach is used to solve either a mapping (to every element),
//filtering, or
// accumulate/reduction (ex. adding all numbers in an array) problem

//When dealing with an array:
//Step 1: Ignore the fact that it's an array, and solve the issue for one thing so that you can replicate
//Step 2: Put the solution to one into the solution for many

//homework
//
// take an array of strings containing all the states
// and return only states that start w/ letter T

states = ["Colorado", "Texas", "Nevada", "Montana", "Tennesee"];
//loops--when we don't know the exact number of iterations (while, do-while)
//loops to use when we know how many times to repeat (for, foreach)
//filtering exercises will usually contain an 'if' statement
//filtering exercises will also need a place for the correct results to land like a new array
var i, statesWithALetterAtTheBeginning = [];
for(i = 0;i < states.length; i++){
    if(states[i][0] == "T"){ // does this one start with a "T"?
        statesWithALetterAtTheBeginning.push(states[i]);
    }
}

//make another function that returns a new array of all the states >= two "s" characters
var i, statesWithMoreThanTwoS = [];
for(i = 0;i < states.length; i++){
    if(states[i].indexOf("s") < states[i].lastIndexOf("s")){ // this is the same as above, except we're changing what we're looking for
        statesWithALetterAtTheBeginning.push(states[i]);
    }
}


// make a function that squares each number on an array
//  take an array of numbers and make a forEach that multiplies each number by itself
// function should return the arrayOfSquares
//MAPPING exercise
function squares(numbers){
    var squared = []; //where the results go
    numbers.forEach(function(number){ //applies the mapping to each
    squared.push(number*number); //the mapping
    });
    return squared;
}


// write a function that takes an array of lowercase names
// Uppercase the first letter of each name
// and returns only the names that start with "Y"
//MAPPING and FILTERING
function lowercaseNamesWithY(names){
    var namesWtihY = [];
    names.forEach(function(name){
        if(name[0].toUpperCase() == "Y"){
            namesWithY.push(name.substring(0, 1).toUpperCase() + name.substring(1));
        }
    });
    return namesWtihY;
}
console.log(lowercaseNamesWithY([]));


//  write a function that takes an array of numbers 1-10
// return the sum of only the numbers divisible by 3
//

function onlyDivisiblebyThree(){
    numbers.forEach(function(number){
        var sum = 0;
        if(number % 3 == 0){
            sum+=number;
        }
    });
    return sum;
}
console.log(onlyDivisiblebyThree([1, 3, 6, 7, 9, 12]));