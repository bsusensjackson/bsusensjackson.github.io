$(function(){

var box = document.getElementById("black_box")
console.log(box)
var hammer = Hammer(box).on("swipeleft", function() {
        console.log("swipe!");
    });

});
