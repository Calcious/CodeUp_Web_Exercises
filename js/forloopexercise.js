/**
 * Created by Calcious on 10/7/16.
 */
//for loop
//for(initialize; condition; incrimenter){ }
//"9".repeat(9)
// for(var n= 1; n<=10; n++){
//     console.log(n);
// }

//EXERCISE 1

for(i=1; i<=9; i++){
    console.log(i.toString().repeat(i));
}
i=0;
console.log(i.toString().repeat(10));


//EXERCISE 2

var luckyNumber = Math.floor(Math.random()* 10) + 1;
for(i=1; i<=10; i++){
console.log (luckyNumber.toString() + "*" + i + "=" + (luckyNumber) * (i));
}


//EXERCISE 3

for(i=1; i<=10; i++){
    var luckyNumber2 = Math.floor(Math.random()* 180) + 20;

    if(luckyNumber2 % 2 != 0){
        console.log(luckyNumber2 + " is odd.");
    } else{
        console.log(luckyNumber2 + " is even.");
    }
}
console.log("I'm outside the loop.");


//EXERCISE 4

for(i=100; i>=5; i-=5){
    console.log((i));
}

for(var i = 1;i <=10; i++) {
// how to convert a number into a string with javascript//
var string = i.toString();
// how to get the last character of a string//
var lastCharacter = string[string.length - 1];
// how to repeat a string n number of times in javascript
console.log(lastCharacter.repeat(i));
}


//Math.floor(Math.random() * (ending-starting) + starting