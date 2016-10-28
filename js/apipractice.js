/**
 * Created by Calcious on 10/19/16.
 */
<!-- Script to show address on map -->
(function () {
    "use strict";

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 12,

        // This sets the center of the map at our location
        center: {
            lat: 29.426791,
            lng: -98.489602
        }
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("gmap-canvas"), mapOptions);

    // Include code from previous example

// Set our address to geocode
    var address = "300 Alamo Plaza, San Antonio, TX, 78205";
    var restAdr = "419 N St Mary's St, San Antonio, TX 78205";

// Init geocoder object
    var geocoder = new google.maps.Geocoder();

// Geocode our address
    geocoder.geocode({"address": address}, {"Blanco Cafe": restAdr}, function (results, status) {

        // Check for a successful result
        if (status == google.maps.GeocoderStatus.OK) {

            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);
        } else {

            // Show an error message with the status if our request fails
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });
    // Create lat and long for our marker position
    var codeup = {lat: 29.426791, lng: -98.489602};
    var blancoCafe = {lat: 29.4281, lng: -98.4914};

    // Add the marker to our existing map
    // var marker = new google.maps.Marker({
    //     position: codeup,
    //     map: map
    // });
    // var restMarker = new google.maps.Marker({
    //     position: blancoCafe,
    //     map: map
    // });
    //Dragable Marker
    var dragMarker = new google.maps.Marker({
        position: {
            lat: 29.423017,
            lng: -98.48527
        }, map: map,
        draggable: true
    });


    // Create a new infoWindow object with content
    // var infowindow = new google.maps.InfoWindow({
    //     content: "Changing the world, one programmer at a time."
    // });
    // var resInfowindow = new google.maps.InfoWindow({
    //     content: "The Original Blanco Cafe. <strong>  They have a great breakfast menu!</strong>"
    // });

// Open the window using our map and marker
//     infowindow.open(map, marker);
//     resInfowindow.open(map, restMarker);
})();


// function onPositionR(position){
//     console.log(position);
// }
//
// function locNotRec(positionError) {
//     console.log(positionError);
// }

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(onPositionR, locNotRec, {timeout: 0});
// }

// if(navigator.geolocation){
//     var watch = navigator.geolocation.watchPosition(onPositionR, locNotRec);
//     console.log(watch);
//     navigator.geolocation.clearWatch(watch);
// }