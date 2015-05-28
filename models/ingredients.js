var mongoose 		= require("mongoose");

var ingredientSchema= new mongoose.Schema({
	ingredientName: {
		type: String,
		default: ""
	}
	_category: {
		type: Schema.Types.ObjectID,
		ref: 'Category'
	}

})


var Ingredient 		= mongoose.model("Ingredient", ingredientSchema);

module.exports 		= Ingredient;