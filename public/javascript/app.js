// wait for the window to load
$(function() {


	// Steps toward adding user data

	// 1. Fetch current user data from
	//		backend

	// 2. Grab template from the page

	// 3. Pass user data into the
	//		template

	// 4. Use jQuery to append the
	//		rendered template with
	// 		the user data

	// alert("working");
	// 1. get data for profile
	$.get("/api/user", function (data) {
		$user = data;
		//console.log("hello I'm here!");
		//$("#profile-name").html($user.firstName);
		// this grabs the script tag
		var $userTemp = $("#userTemp");
		// this turns it into a templating function
		kvar userTemplate  = _.template($userTemp.html());

		var rndrUser = userTemplate(data);

		$("body").append($(rndrUser));
		alert("working")

		var $ingTemp = $("#ingTemp");
		// this turns it into a templating function
		var ingTemplate  = _.template($ingTemp.html());

		var rndrIng = ingTemplate(data);


		$("body").append(rndrIng);

	});



})
