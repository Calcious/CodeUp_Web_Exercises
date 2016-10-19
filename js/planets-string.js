/**
 * Created by Calcious on 10/13/16.
 */
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.

    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    var planetsString = planetsArray.join("<br>");
    console.log(planetsString);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var htmlContent = "<ul>";

    planetsArray.forEach(function (planet) {
        htmlContent += "<li>" + planet + "</li>";
    });
    htmlContent += "</ul>";
    console.log(htmlContent);

})();