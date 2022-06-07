const { count } = require("console")
const { get } = require("http")
const BookModel = require("../models/bookModel")
// Question no-1
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}
//Question no-2
const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 },)
    res.send({ msg: allBooks })
}

// Question -3
const getBooksInYear = async function (req, res) {
    let allBooks = await BookModel.find({ publishedYear: { $eq: req.body } })
    res.send({ msg: allBooks })
}
// Question -4
const getParticularBooks = async function (req, res) {
    let fetch = req.body
    let allBooks = await BookModel.find(fetch)
    res.send({ msg: allBooks })
}

//Question No -5
const getXINRBooks = async function (req, res) {
    let allBooks = await BookModel.find({
        "prices.indianPrice": { $in: ["100INR", "200INR", "500INR"] }
    }
    )
    res.send({ msg: allBooks })
}
//Question No -6
const getRandomBooks = async function (req, res) {

    let allBooks = await BookModel.find({
        $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }]
    })
    return res.send({ msg: allBooks })
}


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks





