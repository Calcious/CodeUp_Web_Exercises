/**
 * Created by Calcious on 10/13/16.
 */
(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;
    var person = new Object();
    console.log(typeof person);

    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    var person = {};
    person.firstname = "Justin";
    person.lastname = "Armer";
    console.log(person.firstname);
    console.log(person.lastname);

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    // person.sayHello();

    person.sayhello = function () {
        alert("Hello from " + person.firstname + person.lastname);
    };
    person.sayhello();
})();

