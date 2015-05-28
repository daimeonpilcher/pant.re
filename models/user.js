var mongoose 	= require("mongoose");	// require mongoose ORM
var bcrypt		= require("bcrypt");	// require bcrypt for password encryption before saving to database
//######################Begin Schema#######################################
var userSchema	= new mongoose.Schema({ // creates the new Schema
	firstName: {						// Creates field for First Name
		type: String,
		default: ""						// Sets default value to "" to ensure db structure
	},
	lastName: {							// Creates field for the Last name
		type: String,
		default: ""
	},	
	email: {							// This is the email field
		type: String,					// Sets the value to a string type
		lowercase: true,				// ensures data is saved in lowercase format
		required: true,					// ensures the field is required
		index: {						// sets index parameters
			unique: true				// index is required to be unique
		}
	},
	passwordDigest: {					// User's password is saved into this field
		type: String,					// after it has been hashed and encrypted
		required: true					// Requires the user to have a password
	},
	age: {								// Creates field for age (used to track the users age and weight goals(Future feature))
		type: Number,					// Sets value type to Number
		default: ""
	},
	weight: {							// Creates field for user's weight (used for goal metrics later)
		type: Number,
		default: ""
	},
	profileImage: {						// Set path to user profile page
		type: String,
		default: ""
	},
  // userIngredients: [{       // Creates Ingredients Field belonging to user
  //   _ingredient: {
  //     type: Schema.Types.ObjectID,
  //     ref: "Ingredient"
  //   },
  //   qty: {
  //     type: Number,
  //     default: 0
  //   },
  //   expDate: {
  //     type: Date,
  //     default: ""
  //   }
  // }],
  // userRecipes: [{
  //   type: Schema.Types.ObjectID,
  //   ref: 'Recipe'
  // }]
	// dietaryRestrictions: {			// To be used later
	// }
});
//#####################END SCHEMA##########################################################

var confirm = function (password, password_con) {
  return password === password_con;
};

userSchema.statics.createSecure = function (params, cb) {
  var isConfirmed;

  isConfirmed = confirm(params.password, params.password_con);
  console.log(params.password, params.password_con)
  if (!isConfirmed) {
    return cb("Passwords Should Match", null);
  }

  var that = this;

  // generate the salt
  bcrypt.genSalt(function (err, salt) {
    bcrypt.hash(params.password, salt, function (err, hash) {
      console.log(hash);
      that.create({
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        passwordDigest: hash
       }, cb)
    });
  })
};

userSchema.statics.authenticate = function (params, cb) {
  this.findOne({
      email: params.email
    },
    function (err, user) {
      console.log("Checking Password for")
      user.checkPswrd(params.password, cb);
    });
};

userSchema.methods.checkPswrd = function(password, cb) {
  var user = this;
  bcrypt.compare(password, 
  this.passwordDigest, function (err, isMatch) {
    if (isMatch) {
      console.log("passwords match")
      cb(null, user);
    } else {
      console.log("passwords don't match")
      cb("OOPS", null);
    }
  });
};

var User = mongoose.model("User", userSchema);

module.exports = User;