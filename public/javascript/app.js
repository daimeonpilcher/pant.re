// wait for the window to load
$(function() {

	// get data for profile
	$.get("/api/user", function (data) {
		$user = data;
	});

	$("#profile-name").append($user.firstName);

})