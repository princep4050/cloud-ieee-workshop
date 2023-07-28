const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hi Prince here");
});

app.listen(4000,()=>{
    console.log("Server started");
})
