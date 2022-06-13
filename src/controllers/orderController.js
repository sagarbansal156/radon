const { count } = require("console")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let data = req.body;
    //let freeUser = await userModel.findOne({_id:data.isFreeAppUser}).find(data.isFreeAppUser)
    let userId = await userModel.findOne({_id:data.userId})
    //console.log(freeUser)
    let productId = await productModel.findOne({_id:data.productId})
    if(userId!= null){
        if(productId!= null){
            //if(freeUser ==true){
                //data.isFreeAppUser= true;
                //data.amount= 0;
                let savedData = await orderModel.create(data)
                res.send({ data: savedData })
            //}
           //res.send("hello")
        }
        else{ 
            res.send({err: "Product Id not found"})
        }
    }
    else{
        res.send("User Id Not Found")
    }
    
}

module.exports.createOrder = createOrder
