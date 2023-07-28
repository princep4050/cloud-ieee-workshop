const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hi");
});

app.listen(4000,()=>{
    console.log("Server started");
})
