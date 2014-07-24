$(function(){

var page = document.getElementById("page")
$('#what1').hide()
var hammer = Hammer(page).on("swiperight", function() {
       $('#what1').show();
    	$('#what').hide();
    });
var hammer2 = Hammer(page).on("swiperight", function() {
       $('#what').show()
       $('what1').hide()
    });


});
