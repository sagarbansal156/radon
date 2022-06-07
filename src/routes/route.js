const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")
// Question no-1
router.post("/createBook", BookController.createBook)
//question no-2
router.get("/bookList", BookController.bookList)
// question no -3
router.post("/getBooksInYear/", BookController.getBooksInYear)
// Question no -4
router.post("/getParticularBooks/", BookController.getParticularBooks)
//Question no -5
router.get("/getXINRBooks", BookController.getXINRBooks)
//Qestion no-6 
router.get("/getRandomBooks", BookController.getRandomBooks)
module.exports = router;
