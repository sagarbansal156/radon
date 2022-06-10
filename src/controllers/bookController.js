
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")


const createBook = async function (req, res) {
    let book = req.body
    if(!book.author){res.send("Please enter the author details")}
    let x = book.author
    let authorPresent = await authorModel.findById(x)
    if(authorPresent==null){res.send("author detail is not valid")}


    if(!book.Publisher){res.send("Please enter the publisher details")}
    let y = book.Publisher
    let publisherPresent= await publisherModel.findById(y)
    if(publisherPresent==null){res.send("publisher detals is not valid")}

    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
    
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('Publisher')
    res.send({ data: specificBook })

}
/*const bookUpdateBoolean = async function (req, res) {
    let specificBook = await bookModel.find().upsert(isHardCover,{$set:false})
    res.send({ data: specificBook })

}*/
//const bookUpdatePrice = async function (req, res) {
   // let specificBook = await bookModel.find()
   // res.send({ data: specificBook })

//}


module.exports.createBook = createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
//module.exports.bookUpdateBoolean = bookUpdateBoolean
//module.exports.bookUpdatePrice = bookUpdatePrice