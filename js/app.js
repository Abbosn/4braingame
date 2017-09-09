$(document).ready(function(){
	$("#start").click(function(){
		$(".container").toggleClass("step-1");
	});
	$(".menu").click(function(){
		$(".hamburger-menu").toggleClass("open");
	});
});