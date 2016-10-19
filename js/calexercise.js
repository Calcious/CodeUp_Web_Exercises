// /**
//  * Created by Calcious on 10/17/16.
//  */

//EVENT LISTENERS--OPERATORS
//add
document.getElementById("sum").addEventListener("click", plusPop);

function plusPop() {
    document.getElementById("operator").value = "+";
}
//subtract
document.getElementById("sub").addEventListener("click", subPop);

function subPop() {
    document.getElementById("operator").value = "-";
}
//multiply
document.getElementById("multi").addEventListener("click", multiPop);

function multiPop() {
    document.getElementById("operator").value = "*";
}
//divide
document.getElementById("divide").addEventListener("click", dividePop);

function dividePop() {
    document.getElementById("operator").value = "/";
}

//NUMBERS

//Function to make sure numbers go to the correct fields

var firstNum = document.getElementById("firstNum");
var secondNum = document.getElementById("secondNum");
var operator = document.getElementById("operator");
var totalArea = document.getElementById("totalArea");

function popNumber(){
    if(operator.value == ""){
        firstNum.value += this.innerHTML;
    } else{
        secondNum.value += this.innerHTML;
    }
}
var numbers = document.getElementsByClassName('numberv');

//EVENT LISTENER FOR NUMBER BUTTONS

for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", popNumber);
}


//EQUALS AND CLEAR

//Equals
document.getElementById("total").addEventListener("click", totalPop);
function totalPop(){
    totalArea.value = eval((firstNum.value) + (operator.value) + (secondNum.value));
}

//Clear
document.getElementById("clear").addEventListener("click", clearPop);

function clearPop() {
    document.getElementById("operator").value = "";
    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    document.getElementById("totalArea").value = "";
}


// document.getElementById('add').addEventListener('click', function()){
//     var leftInput = document.getElementById('leftInput').value;
//     var rightInput = document.getElementById('rightInput').value;
//     var result = leftInput + rightInput;
//     //clear out all the inputs
//     //set the .value or .innerHTML of the input to hold the new result
// }


