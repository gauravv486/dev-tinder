const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("hello from gaurav");
})

app.get("/test", (req , res)=>{
    res.send("hello from start");
})

app.listen(7777 , ()=>{
    console.log("Server running sucssesfully");
})