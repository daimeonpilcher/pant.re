// require and setup mongodb for use with the app.
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pant.re-app");


module.exports.User = require("./user");

modue