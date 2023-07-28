const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hi Prince here but this was fun!");
});

app.listen(4000,()=>{
    console.log("Server started");
})
