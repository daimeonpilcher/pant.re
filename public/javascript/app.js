// wait for the window to load
$(function() {
	var $greeting = $("#greeting");

	// get data for profile
	$.get("/api/user", function (data) {
		$user = data;


	});


})