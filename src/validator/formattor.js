let b = "FunctionUp is Best"
const Trim = function(){
    let x = "    FunctionUp is Best   "
    console.log(x.trim())
}
const uppercase = function(){
    console.log(b.toUpperCase())
}
const lowercase = function(){
    console.log(b.toLowerCase())
}

module.exports.Trim = Trim
module.exports.uppercase=uppercase
module.exports.lowercase=lowercase