/**
 * Created by Calcious on 10/14/16.
 */

'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

while (i <= 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    // What do I need here?
    if(luckyNumber == 0){
        count0++;
    }
    if(luckyNumber == 1){
        count1++;
    }
    if(luckyNumber == 2){
        count2++;
    }
    if(luckyNumber == 3){
        count3++;
    }
    if(luckyNumber == 4){
        count4++;
    }
    if(luckyNumber == 5){
        count5++;
    }
    i++;
}

// The output should be something like
console.log("0 appeared " + count0 + " times.");
console.log("1 appeared " + count1 + " times.");
console.log("2 appeared " + count2 + " times.");
console.log("3 appeared " + count3 + " times.");
console.log("4 appeared " + count4 + " times.");
console.log("5 appeared " + count5 + " times.");
// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100



//SWITCH SOLUTION
switch(luckyNumber){
    case 0: //luckyNumber == 0
        count0++;
        break;
    case 1:
        count1++;
        break;
    case 2:
        count2++;
        break;
    case 3:
        count3++;
        break;
    case 4:
        count4++;
        break;
    case 5:
        count5++;
        break;
}
i++;


//ARRAY SOLUTION
var counters = [0, 0, 0, 0, 0, 0]; //0,1,2,3,4,5

switch(luckyNumber){
    case 0:
        counters[0]++;
        break;
    case 1:
        counters[1]++;
        break;
    case 2:
        counters[2]++;
        break;
    case 3:
        counters[3]++;
        break;
    case 4:
        counters[4]++;
        break;
    case 5:
        counters[5]++;
        break;
}
i++;

//EVOLVED SOLUTION
while(i <= 100){
    luckyNumber = luckyNumber = Math.floor(Math.random()* 6);
    counters[luckyNumber]++;
    i++;
}
counters.forEach(function(counter, i) {
    console.log(i + " appeared " + counter + " times.");
});

//CODING IS A PROCESS OF EVOLVING BETTER AND BETTER SOLUTIONS--YOU NEVER START WITH THE EVOLVED SOLUTION