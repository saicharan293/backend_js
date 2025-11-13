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

// ikkada error ni ela use cheyali, ela display cheyali anedi chustunnam

app.get("/profile", function(req, res, next){
    return next(new Error("Something went wrong"))
})

// error handling using Express js
// idi eppudu aina kani last lo ne undali

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000);