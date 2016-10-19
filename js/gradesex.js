/**
 * Created by Calcious on 10/11/16.
 */
// Implement the student's grades exercise, but now getting the input from a user.
// Create an HTML file named grades-interactive.html
// Create a JS file named grades.js, load it using a script tag.
//     Using a for loop to prompt the user for three grades.
//     After reading those 3 grades, calculate the student's grade average
// Using an alert show the message You're awesome if the average is greater than or equals to 80. Show You need to practice more otherwise
// All this code should be inside of a function named average3Grades.


//function average3Grades(){}
//average3Grades;

// function average3Grades(num1, num2, num3){
//     average3Grades = (num1 + num2 + num3) / 3;
//     alert("The average is " + average3Grades);
//     if(average3Grades >= 80) {
//         alert("You're awesome!");
//     } else {
//         alert("You might need some more practice.");
//     }
//
// }
//
// for (i = 1; i<2; i++) {
//     var num1 = prompt("Please input your first grade.");
//     var num1 = parseInt(num1);
//     var num2 = prompt("Please input your second grade.");
//     var num2 = parseInt(num2);
//     var num3 = prompt("Please input your third grade.");
//     var num3 = parseInt(num3);
// }
// console.log("Your average is " + average3Grades(num1, num2, num3));





//     In the same JS file create another function named genericGradesAverage
// Instead of a for use a do while.
//     Use a confirm prompt to ask the student for more grades Add another grade? (Ok, Cancel). If the user clicks on Cancel stop asking for grades and calculate the average.
//     The rest of the logic remains the same.
//     Call the new function instead of average3Grades.

//genericGradesAverage();

var gradesum = 0;
var gradeamount = 1;

function genericGradesAverage(){
    do {
        var grade = parseInt(prompt("Enter grade"));
        gradesum = gradesum + grade;
        gradeamount++;
        var confirming = confirm("Would you like to add another grade?");
        console.log(grade);
        console.log(gradesum);
    }
    while(confirming);
    return gradesum / gradeamount;
}
alert(genericGradesAverage());


//CLASS NOTES
function getNumericGrade(){
    var grade = parseInt(prompt("Please input your grade."));
    while(isNaN(grade) || grade < 0 || grade > 100)) {
    grade = parseInt(prompt("Please input your grade as a number between 1 and 100."))
    }
    return grade;
}

//Use typeof and console.log at various steps to clarify what is going on
//Declare variables at the top of the function--especially be careful in establishing variables within loops