/**
 * Created by Calcious on 10/26/16.
 */


function getInfo() {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "521247e3123f3e67ba002c732798b3e7",
        q: "San Antonio",
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        forecastData(data);
        //call the forecast data function here
    }).fail(function (data) {
        alert("something went wrong...");
    });
}

function forecastData(data){
    //DAY 1
    $("#degree").html("<div><strong>" + data.list[0].main.temp_max + " || " + data.list[0].main.temp_min + "</strong></div>"); //TEMPH/TEMPL
    $("#icon").html("<div><img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>" + "</img></div>");
    $("#clouds").html("<div><strong>" + data.list[0].weather[0].description + "</strong></div>"); //CLOUDS
    $("#humidity").html("<div><strong>" + data.list[0].main.humidity + "</strong></div>"); //HUMIDITY
    $("#wind").html("<div><strong>" + data.list[0].wind.speed + "</strong></div>"); //WIND
    $("#pressure").html("<div><strong>" + data.list[0].main.pressure + "</strong></div>"); //PRESSURE
    //DAY 2
    $("#d2degree").html("<div><strong>" + data.list[1].main.temp_max + " || " + data.list[1].main.temp_min + "</strong></div>"); //TEMPH/TEMPL
    $("#d2icon").html("<div><img src='http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png'>" + "</img></div>");
    $("#d2clouds").html("<div><strong>" + data.list[1].weather[0].description + "</strong></div>"); //CLOUDS
    $("#d2humidity").html("<div><strong>" + data.list[1].main.humidity + "</strong></div>"); //HUMIDITY
    $("#d2wind").html("<div><strong>" + data.list[1].wind.speed + "</strong></div>"); //WIND
    $("#d2pressure").html("<div><strong>" + data.list[1].main.pressure + "</strong></div>"); //PRESSURE
    //DAY 3
    $("#d3degree").html("<div><strong>" + data.list[9].main.temp_max + " || " + data.list[9].main.temp_min + "</strong></div>"); //TEMPH/TEMPL
    $("#d3icon").html("<div><img src='http://openweathermap.org/img/w/" + data.list[9].weather[0].icon + ".png'>" + "</img></div>");
    $("#d3clouds").html("<div><strong>" + data.list[9].weather[0].description + "</strong></div>"); //CLOUDS
    $("#d3humidity").html("<div><strong>" + data.list[9].main.humidity + "</div>"); //HUMIDITY
    $("#d3wind").html("<div><strong>" + data.list[9].wind.speed + "</strong></div>"); //WIND
    $("#d3pressure").html("<div><strong>" + data.list[9].main.pressure + "</strong></div>"); //PRESSURE
}

$("button").click(getInfo);
