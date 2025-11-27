const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get("/", (req, res)=>{
    res.cookie("name", "sai");
    res.send("cookies start cheddam mawa");
})

app.get("/read", (req, res)=>{
    console.log(req.cookies);
    res.send("read route")
})

app.listen(3000, ()=> console.log("Program start aindi"));