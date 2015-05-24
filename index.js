var express 	= require("express"),			// Require Express to manage website
	bodyParser 	= require("body-parser"),		// Require Body-Parser to be able to read form data
	path 		= require("path"),				// Require Path for applications
	session		= require("express-session"),	// Require Express Sessions for Session Cookies
	db			= require("./models");

var app = express();							// Start Express function

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));

var views = path.join(process.cwd(), "views")

//set root route
app.get("/", function (req, res) {
	var homePath = path.join(views, "home.html");
	res.send(homePath);
})

// get path to users

// get path to recipes

// get path to ingredients

// post to users

// post to recipes

// post to ingredients

// get path to login page

// post path to login page
	// after login redirect user to profile page

// get path to profile page

// post to profile page (users)



app.listen(3000, function () {					// Starts the Node.JS Server on Port 3000
	console.log("Successfully Started!");
})