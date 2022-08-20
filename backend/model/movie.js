var mongoose = require('mongoose');
var Schema = mongoose.Schema;

movieSchema = new Schema( {
	title: String,
	overview: String,
	desc: String,
	vote_average: Number,
	image: String,
	user_id: Schema.ObjectId,
	date : { type : Date, default: Date.now }
}),
movie = mongoose.model('movies', productSchema);

module.exports = movie;