const express = require ("express");
const route=express.Router();

route.get("/stuinfo" , (req, res)=>{
    res.send("<h1>This is student info</h1>")
})

route.get("/stufees" , (req, res)=>{
    res.send("<h1>This is student fees</h1>")
})

route.get("/stuclass" , (req, res)=>{
    res.send("<h1>This is student class</h1>")
})

route.get("/sturesult" , (req, res)=>{
    res.send("<h1>This is student class</h1>")
})


route.get("/" , (req, res)=>{
    res.send("<h1>This is student homepage</h1>")
})

module.exports=route;