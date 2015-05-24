// require and setup mongodb for use with the app.
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pantre");


module.exports.User = require("./user");