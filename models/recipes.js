var mongoose 	= require("mongoose");

var recipeSchema= new mongoose.Schema({
	_recipeUser: {
		type: Schema.Types.ObjectID,
		ref: "User"
	}
	recipeName: {
		type: String,
		default: ""
	},
	recipeIngredients: [{
		_ingredient: {	
			type: Schema.Types.ObjectID,
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