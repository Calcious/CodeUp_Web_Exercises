/**
 * Created by Calcious on 10/13/16.
 */
// 'use strict';

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];

// log out the books array
// console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
// console.log("Book #" + todo);
// console.log("Title: " + todo);
// console.log("Author: " + todo);
// console.log("---");
// end loop here

// {
//     "stringProp": "stringValue",
//     "numberProp": 1,
//     "objectProp": {
//     "prop": "value"
// },
//     "arrayProp" : ['item1', 'item2'],
//     "arrayOfObjectsProp" : [
//     {
//         "prop": "value"
//     },
//     {
//         "prop": "value"
//     }
// ],
//     "boolProp"  : true,
//     "nullProp"  : null
// }


var books = [
    {
        "title":"Oryx and Crake",
        "author":{
            "firstName":"Margaret",
            "lastName":"Atwood"
        }
    },
    {
        "title":"The Blade Itself",
        "author":{
            "firstName":"Joe",
            "lastName":"Abercrombie"
        }
    },
    {
        "title":"Hyperion",
        "author":{
            "firstName":"Dan",
            "lastName":"Simmons"
        }
    },
    {
        "title":"Cloud Atlas",
        "author":{
            "firstName":"David",
            "lastName":"Mitchell"
        }
    }

];

var book = books[2];



books.forEach(function(book, index){
    console.log("Book # is " + (index + 1));
    console.log("Title of book: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
});

function addBook(){
    var book = {};
    var author = {};
    book.title = prompt("What is the title of the book");
    author.firstname = prompt("What is the author's first name?");
    author.lastname = prompt("What is the author's last name?");
    book.author = author;

    books.push(book);
}
addBook();

//This is how modern web-apps fire data back and forth--all the data is in an array of objects (movie recommendations, actors, etc.)
//For extra practice--make