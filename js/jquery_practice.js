/**
 * Created by Calcious on 10/21/16.
 */
$("h1").click(function () {
    $(this).css("background-color", "red");
});
$("p").dblclick(function () {
    $(this).css("font-size", "18px");
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);