
const Mid1= function ( req, res, next) {
    data = req.headers.isfreeappuser
    if(data===undefined){
     res.send("Please input header in the Api")
    }
    else{
        next()
    }
    
}

module.exports.Mid1=Mid1


