var express 	= require("express"),			// Require Express to manage website
	bodyParser 	= require("body-parser"),		// Require Body-Parser to be able to read form data
	path 		= require("path"),				// Require Path for applications
	session		= require("express-session"),	// Require Express Sessions for Session Cookies
	db			= require("./models");

var app = express();							// Start Express function

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));

// use sessions
app.use(session({
	secret: "Pant.R3 53crE7",
	resave: false,
	saveUninitialized: true
}))

var views = path.join(process.cwd(), "views")

app.use("/", function (req, res, next) {
	//logs in a user by saving their user ID
  req.login = function (user) {
    // user ~ {email: "jane@janedoe.com, _id: ASDF"}
    // setting user's session to store their _id
    req.session.userId = user._id;
  };
  //fetches the user associated with the current session
  req.currentUser = function (cb) {
     db.User.
      findOne({
          _id: req.session.userId
      },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };

  // clear
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  }

  next(); 
});

//set root route
app.get("/", function (req, res) {
	var homePath = path.join(views, "home.html");
	console.log("Successfully Loaded Home Page (Get '/')");
	res.sendFile(homePath);
})
//set path to secondary signup page
app.get("/join", function (req, res) {
	var joinPath = path.join(views, "join.html");
	console.log("Successfully loaded Join Page (Get '/join')");
	res.sendFile(joinPath);
})
// get path to recipes


// get path to ingredients

// post to users
app.post("/users", function (req, res) {
	var newUser = req.body.user;
	db.User.createSecure(newUser, function (err, user){
		if (user) {
			console.log(user);
			req.login(user);
			
			res.redirect("/profile")
		} else {
			res.redirect("/join");
		}
	});
});

// temp code to get users
app.get("/users", function (req, res) {
	req.currentUser(function (err, user) {
		res.send(user.email + " " + user.firstName)
	})
})

// post to recipes

// post to ingredients

// get path to login page
app.get("/login", function (req, res) {
	var loginPath = path.join(views, "login.html");
	res.sendFile(loginPath);
})

// post path to login page
app.post("/login", function (req, res) {
	db.User.authenticate (user, function (err, user) {
		if (!err) { 			// after login redirect user to profile page
			req.login(user);
			res.redirect("/profile")
		} else {
			res.send(user + ", please try again")
		}
	})
})
	

// get path to profile page
app.get("/profile", function (req, res){
	var profilePath = path.join(views, "profile.html");
	console.log("Successfully loaded user " + user.firstName + "'s profile!")
	res.sendFile(profilePath);
})
// post to profile page (users)



app.listen(3000, function () {					// Starts the Node.JS Server on Port 3000
	console.log("Successfully Started!");
})