var mongoose 	= require("mongoose");

var recipeSchema= new mongoose.Schema({
	recipeName: {
		type: String,
		default: ""
	},
	recipeIngredients: [{
		ingredient: {	
			type: Schema.Types.ObjectID,
			ref: 'Ingredient'
		},
		Amount: {
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