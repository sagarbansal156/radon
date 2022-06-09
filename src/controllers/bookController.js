
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")


const createBook = async function (req, res) {
    let book = req.body
    if(!book.author){res.send("Please enter the author details")}
    let x = book.author
    let authorPresent = await authorModel.findById(x)
    if(authorPresent==null){res.send("author detail is not valid")}


    if(!book.publisher){res.send("Please enter the publisher details")}
    let publisherPresent= await publisherModel.findById(book.publisher)
    if(publisherPresent==null){res.send("publisher detals is not valid")}

    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
    
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author')
    res.send({ data: specificBook })

}



module.exports.createBook = createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
