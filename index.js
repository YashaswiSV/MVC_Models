const express= require ("express");
const app= express();
const port = 8000;

const stuRoute=require("./routes/studentRoutes")
const teachRoute=require("./routes/teacherRoutes")


app.get("/" , (req , res)=>{

    res.send("<h1>Hello</h1>")
})

app.use("/student" , stuRoute)

app.use("/teacher" , teachRoute)

app.listen(port , ()=>{

    console.log("server is running on this port")
});