var mongoose = require('mongoose');

// define the schema for our user model
var infoSchema = mongoose.Schema({
	infoName: String,
	likes: Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Info', infoSchema);