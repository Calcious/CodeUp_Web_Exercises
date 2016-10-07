/**
 * Created by Calcious on 10/7/16.
 */
//Counter
//Accumulator

var i =1 //counter

// are we done yet?
while(/* condition, return true,  */ i<21){ //start of a block
    console.log(i);
    i++; //increment //iteration could also be += 2
} //end of a block

console.log("We're done!");

var targetAmount = 100;
var amountSaved = 0; //accumulator
var j = 0 //counter for the accumulator

while(amountSaved < targetAmount){
    amountSaved += Math.floor(Math.random() * 10) + 1;
    j++;
}


//use a do/while when you want the code at least one time
do {
    amountSaved += Math.floor(Math.random() * 10) + 1;
    j++;
} while(amountSaved < targetAmount);

console.log("I saved " + amountSaved + "there were " + j + "repetitions");


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5
var cones;
var conesLeft = allCones;
console.log((allCones) + " cones to sell!");

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    //if I have 2 available and a customer wants 4, I shouldn't sell
    if(cones < conesLeft){ //If I have enough cones available
        conesLeft -= cones;
        console.log((cones) + " cones sold...");
    }
    else {
        /* Try again */
        console.log("I cannot sell you " + (cones) + "." + "  I only have " + (conesLeft) + " cones left.");
    }
    var conesLeft= allCones-cones;
    allCones = conesLeft;
} while (conesLeft>0);
console.log("Yay!  I sold them all!");

var i = 2;
while(i<=65000){
    i*=2;
    console.log(i);
}
console.log("we're done");