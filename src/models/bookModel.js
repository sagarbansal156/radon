const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: String,
    author: {
        type: ObjectId,
        ref: "Author",
        required:true,
    },
    price: Number,
    ratings: Number,
    Publisher: {
        type: ObjectId,
        ref: "Publisher"
    }

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)
