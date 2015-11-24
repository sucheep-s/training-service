var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var roomSchema = new Schema(
	{
		name : {
			type : String,
			trim : true
		}
	}
);
module.exports = Mongoose.model('room', roomSchema);
