/**
 * Created by Calcious on 10/11/16.
 */
// (function(){
//     "use strict";
//
//     // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
//
//     var peopleNames = ["Jim", "Bob", "Tim", "Joe"];
//
//     // TODO: Create a log statement that will log the number of elements in the names array.
//
//     console.log(peopleNames);
//
//     // TODO: Create log statements that will print each of the names array elements individually.
//
//     for(var i = 0; i<4; i++){
//         console.log(peopleNames[i]);
//     }

//EXERCISE 1
//     var grades = [100, 80, 90, 80, 50];
//     function average(gradestoaverage) {
//         //use a for loop to iterate through the array and get the average
//
//     }
//     var sum = 0;
//     for(i=0;grades.length;i++){
//         console.log(gradestoaverage[i]);
//         sum += grades[i];
//     }
//     return sum / grades.length;
    //EXERCISE 2
//     var grade = average(grades);
//     console.log("You made a grade of " + grade);
// })();


var peopleNames = ["Jim", "Bob", "Tim", "Joe"];
    peopleNames.forEach(function (element, index, array) {
        console.log("Name at index " + index + " is " + element);
    });
// })});


'use strict';
// declare and initialize array
var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function (element, index, array) {

    // element is the shape name
    // index is the iterator
    // array is the shapes array itself

    console.log('The shape at index ' + index + ' is: ' + element);
});

//Filtering--"username".indexOf("not");//-1
//array.indexOf(item,start)

//<table>
    //<tr>
        //<td>index</td>
        //<td>element</td>
    //<tr></tr>
//</table>
//
//var htmlTable = '<table>';
//for(i=0; i < shapes.length; i++){
//htmlTable += '<tr><td>' + i + '</td><td>' + shapes[i] + '</td></tr>';
//}

function createHTMLtable(items) {
    var htmlTable = '<table>';
    for (i=0; i < items.length; i++){
        htmlTable += '<tr><td>' + (i + 1) + '</td><td>' + items[i] + '</td></tr>';
    }
    htmlTable += '</table>';
    return htmlTable;
}

// htmlTable = createHTMLtable(shapes);
// console.log(htmlTable);
//
// htmlTable = createHTMLtable(names);
// console.log(htmlTable);

//var shapesWithC = [];
//for(i = 0; i < shapes.length; i++) {
//if(shapes[i].indexOf("c") !== -1) {
//shapesWithC.push(shapes[i]);
//}}