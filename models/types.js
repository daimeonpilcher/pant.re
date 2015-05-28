var mongoose 		= require("mongoose");

var categorySchema	= new mongoose.Schema({
	categoryName: {
		type: String,
		default: ""
	}

})


var Category 		= mongoose.model("Category", categorySchema);

module.exports 		= Category;