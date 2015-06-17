var async		= require("async");
var mongoose 	= require("mongoose");
var Schema = mongoose.Schema;
var recipeSchema= new Schema({
	_recipeUser: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	recipeName: {
		type: String,
		default: ""
	},
	recipeIngredients: [{
		_ingredient: {	
			type: Schema.Types.ObjectId,
			ref: 'Ingredient'
		},
		amount: {
			type: Number,
			default: ""
		}	
	}],
	recipeInstructions: [{
		step: {
			type: String,
			default: "" 
		}
	}]
})


var Recipe 		= mongoose.model("Recipe", recipeSchema);

module.exports 	= Recipe;