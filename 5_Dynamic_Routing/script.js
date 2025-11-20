const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");

app.get("/",(req, res)=>{
    res.render("index");
})


// " : " ni route lo use chesamu ante, dynamic value pass aitundi ani artm
app.get("/profile/:user", (req, res) => {
    const user = req.params.user;
    res.send(`response enti ante ${user}`);
})

app.listen(3000, function(){
    console.log("logs started running on: 3000");
    
});