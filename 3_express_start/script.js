const express = require("express");

const app = express();

// express package ni use chesi routes ni create cheyachu

// app.use((req, res, next)=>{next();}); idi oka middle ware
app.use(function(req, res, next){
    console.log("idi middle ware");
    next();
})

app.get("/", function(req, res){
    res.send("first route and get")
});

app.get("/profile", function(req, res){
    res.send("first profile route")
})

app.listen(3000);