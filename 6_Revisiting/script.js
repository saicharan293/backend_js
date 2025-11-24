const express = require('express');
const app = express();
const path = require('path');


app.set("view engine", "ejs");
app.set(express.json());
app.set(express.urlencoded({extended: true}));
app.set(express.static(path.join(__dirname, 'public')));



app.get("/",(req, res)=>{
    res.render("index")
});

app.listen(3000, ()=>console.log("Program start aindi"))
