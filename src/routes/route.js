const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleware/auth")



router.post("/users", userController.createUser)

//router.post("/login", userController.loginUser)

//The userId is sent by front end

//router.post("/users/:userId/posts", userController.postMessage)


router.get("/users/:userId",middleWare.authenticate,middleWare.authorise, userController.getUserData)

router.put("/users/:userId",middleWare.authenticate,middleWare.authorise,  userController.updateUser)

router.delete('/users/:userId', middleWare.authenticate,middleWare.authorise, userController.deleteUser)

module.exports = router;