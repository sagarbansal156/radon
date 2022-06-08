const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
}

const getAuthorData = async function (req, res) {
    let chetanBhagat = await authorModel.find({ author_name: "Chetan Bhagat" }).select("author_id")
    let bookData = await bookModel.find({ author_id: chetanBhagat[0].author_id })
    console.log(chetanBhagat);
    res.send({ msg: bookData })
}
let authorOfBook = async function (req, res) {
    let data = await bookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    let authorData = await authorModel.find({ author_id: data.author_id }).select("author_name")
    let price = data.price
    res.send({ msg: authorData, price })
}

module.exports.createAuthor = createAuthor
module.exports.getAuthorData = getAuthorData
module.exports.authorOfBook = authorOfBook