const express = require("express");

const app = express();

app.get("/user", (req, res)=>{
    res.send("Get Request");
})

app.post("/user", (req , res)=>{
    res.send("Post Request");
})

app.listen(7777 , ()=>{
    console.log("Server running sucssesfully");
})