const mongoose = require('mongoose');

const objectId = mongoose.Schema.Types.ObjectId

const authorSchema = new mongoose.Schema({
	userId: {type:objectId, ref: "User"},
	productId: {type:objectId, ref: "Product"},
	amount: Number,
	isFreeAppUser: {type:Boolean, default:false},
	date: String
}, { timestamps: true });

module.exports = mongoose.model('Order', authorSchema)
