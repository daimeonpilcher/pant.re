var async = require("async");
var mongoose 		= require("mongoose");
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
	ingredientName: {
		type: String,
		default: ""
	},
	canned: {
		type: Boolean,
		default: false
	},
	dried: {
		type: Boolean,
		default: false
	},
	frozen: {
		type: Boolean,
		default: false
	},
	fresh: {
		type: Boolean,
		default: false
	},
	powdered: {
		type: Boolean,
		default: false
	}

})


var Ingredient 		= mongoose.model("Ingredient", ingredientSchema);

module.exports 		= Ingredient;