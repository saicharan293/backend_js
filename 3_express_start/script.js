const express = require("express");

const app = express();

// express package ni use chesi routes ni create cheyachu

app.get("/", function(req, res){
    res.send("first route and get")
});

app.get("/profile", function(req, res){
    res.send("first profile route")
})

app.listen(3000);