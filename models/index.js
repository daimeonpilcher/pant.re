// require and setup mongodb for use with the app.
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/pantre");
mongoose.connect( process.env.MONGOLAB_URI ||
               process.env.MONGOHQ_URL || 
               "mongodb://localhost/pantre");

module.exports.User = require("./user");
module.exports.Ingredient = require("./ingredients");
module.exports.Recipe = require("./recipes");
