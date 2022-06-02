const PrintDate = function (){
    let x = new Date;
    let b = x.getDate()
    console.log(b)
}
const PrintMonth = function(){
    let x = new Date;
    let b = x.getMonth()
    console.log(b)
}
const getbatchinfo = function(){
    console.log("Radon, 3rd week, 3rd day, topic for today is Nodejs module system")
}
module.exports.PrintDate= PrintDate
module.exports.PrintMonth = PrintMonth
module.exports.getbatchinfo = getbatchinfo
