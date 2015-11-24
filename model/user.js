var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema(
	{
		firstName : {
			type : String,
			trim : true
		},
		lastName : {
			type : String,
			trim : true
		},
		gender : {
			type : Number,
			trim : true
		},
		email : {
			type : String,
			trim : true
		},
		rooms : [ {type : Mongoose.Schema.ObjectId, ref : 'room'} ]
	}
);
module.exports = Mongoose.model('user', userSchema);
