const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderController")
const Mid1 = require ("../middlewares/commonMiddlewares")


router.post("/createProduct", ProductController.createProduct  )

router.post("/createUser", Mid1.Mid1, UserController.createUser)

router.post("/createOrder", Mid1.Mid1, OrderController.createOrder)

// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





//router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)








module.exports = router;