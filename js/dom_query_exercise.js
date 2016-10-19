/**
 * Created by Calcious on 10/17/16.
 */

var greetButtons = document.getElementsByTagName("button");

greetButtons[0].addEventListener("click", function(event)){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var hello = document.getElementById("hello");
    hello.innerHTML = "Hello <strong>" + name + </strong>;

var price = document.getElementById("price").value;
hello.innerHTML = "";

if(name == ""){
    hello.innerHTML = "Please enter a name. <br>";
}
if(price == ""){
    hello.innerHTML += "Please enter a price. <br>";
}
if(isNaN(price)){
    hello.innerHTML += "Price must be a number. <br>";
}
if(price<0){
    hello.innerHTML += "Price must be a value greater than zero. <br>";
}

var anchors = document.getElementsByTagName("a");
    anchors[0].addEventListener('click', function()){
    greetButtons[0].removeEventListener("click", )
}
})
