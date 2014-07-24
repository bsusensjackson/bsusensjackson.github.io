$(function(){

var page = document.getElementById("countdown")
$('#what1').hide()
var hammer = Hammer(page).on("swiperight", function() {
       $('#what1').show();
    	$('#what').hide();
    });
var hammer2 = Hammer(page).on("swipeleft", function() {
       $('#what').show()
       $('#what1').hide()
    });
var hammer3 = Hammer(page).on("tap", function(){
	$('#what2').text('hahahahaha')
});


});
