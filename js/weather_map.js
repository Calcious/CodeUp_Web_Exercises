/**
 * Created by Calcious on 10/26/16.
 */
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: "521247e3123f3e67ba002c732798b3e7",
    q: "San Antonio",
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log(data);
});