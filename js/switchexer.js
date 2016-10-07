/**
 * Created by Calcious on 10/7/16.
 */
var luckyNumber = Math.floor(Math.random()* 6);

var recipt = 60;

switch (luckyNumber){
    case luckyNumber=1:
        recipt = recipt *.9;
        console.log("10% discount applied!  Your total is " + (recipt));
        break;
    case luckyNumber=2:
        recipt = recipt *.75;
        console.log("25% discount applied!  Your total is " + (recipt));
        break;
    case luckyNumber=3:
        recipt = recipt *.7;
        console.log("30% discount applied!  Your total is " + (recipt));
        break;
    case luckyNumber=4:
        recipt = recipt *.5;
        console.log("50% discount applied!  Your total is " + (recipt));
        break;
    case luckyNumber=5:
        recipt = 0;
        console.log("100% discount applied!  Your total is...FREE!");
        break;
    default:
        console.log("No discount--your total is " + (discount));

}

var monthNumber = Math.floor(Math.random()* 12) +1;
switch (monthNumber){
    case monthNumber=1:
        console.log("January");
    break;
    case monthNumber=2:
        console.log("February");
        break;
    case monthNumber=3:
        console.log("March");
        break;
    case monthNumber=4:
        console.log("April");
        break;
    case monthNumber=5:
        console.log("May");
        break;
    case monthNumber=6:
        console.log("June");
        break;
    case monthNumber=7:
        console.log("July");
        break;
    case monthNumber=8:
        console.log("August");
        break;
    case monthNumber=9:
        console.log("September");
        break;
    case monthNumber=10:
        console.log("October");
        break;
    case monthNumber=11:
        console.log("November");
        break;
    case monthNumber=12:
        console.log("December");
        break;
}
