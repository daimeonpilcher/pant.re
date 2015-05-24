var express 	= require("express"),			// Require Express to manage website
//	bodyParser 	= require("body-parser"),		// Require Body-Parser to be able to read form data
	path 		= require("path");				// Require Path for applications
//	session		= require("express-session");	// Require Express Sessions for Session Cookies

var app = express();								// Start Express function

var views = path.join(process.cwd(), "views")

app.use(express.static('public'));

//set root route
app.get("/", function (req, res) {
	var homePath = path.join(views, "home.html");
	res.send(homePath);
})

//temp test path to send users to browser window



app.listen(3000, function () {					// Starts the Node.JS Server on Port 3000
	console.log("Successfully Started!");
})