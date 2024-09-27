
const stuModel = require("../models/studentModel")

const stuInfo=(req, res)=>{
    res.send("This is student info")
}
const stuFees=(req, res)=>{
    res.send("This is student Fees")
}
const stuResult=(req, res)=>{
    res.send("This is student Result")
}
const stuSubject=(req, res)=>{
    res.send("This is student Subject")
}

module.exports={
    stuInfo,
    stuFees,
    stuResult,
    stuSubject

}