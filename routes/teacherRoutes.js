const express = require ("express");
const route=express.Router();

route.get("/subject" , (req, res)=>{
    res.send("<h1>These are the subjects : php , c++ , react , express</h1>")
})

route.get("/salary" , (req, res)=>{
    res.send("<h1>Teacher salary : 30,000</h1>")
})

route.get("/department" , (req, res)=>{
    res.send("<h1>Hr department</h1>")
})
route.get("/" , (req, res)=>{
    res.send("<h1>This is teacher homepage</h1>")
})
route.get("/info" , (req, res)=>{
    res.send("<h1>This is teacher info homepage</h1>")
})



module.exports=route;