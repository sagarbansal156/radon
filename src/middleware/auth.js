const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
let decodedToken 
const authenticate = function(req, res, next) {
    try{
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

   decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.status(403).send({ status: false, msg: "token is invalid" });
    next()
    }
    catch(err){
      res.status(500).send({msg:err})
    }
  } 

const authorise = function(req, res, next) {
  try{
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId

    if(userToBeModified != userLoggedIn) 
    return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next()
  }
  catch(err){
    res.status(500).send({msg:err})
  }
}
module.exports.authenticate= authenticate
module.exports.authorise= authorise