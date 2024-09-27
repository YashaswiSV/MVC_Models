const express = require ("express");
const route=express.Router();

const stuController = require ("../controllers/studentController")

route.get("/stuinfo" , stuController.stuInfo)
route.get("/stufees" , stuController.stuFees)
route.get("/sturesult" , stuController.stuResult)
route.get("/stusubject" , stuController.stuSubject)


module.exports=route;




