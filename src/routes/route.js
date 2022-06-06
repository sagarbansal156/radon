const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)
//question no-2
router.get("/bookList", BookController.bookList)
// question no -3
router.post("/getBooksInYear/:year", BookController.getBooksInYear)


module.exports = router;
