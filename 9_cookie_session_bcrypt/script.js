const express = require('express');
// const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();

// app.use(cookieParser());
//$2b$10$ln5cOP1G9hGiDrTOKoHCP.7sFaIgZlmWebUEu3WFcnof7jlA4mqBa
app.get("/", (req, res)=>{
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash("na istam", 10, function(err, hash){
            console.log(hash);
            
        })
    })
    res.send("cookies start cheddam mawa");
})

app.get("/check", (req, res)=>{
    bcrypt.compare("na istam", "$2b$10$ln5cOP1G9hGiDrTOKoHCP.7sFaIgZlmWebUEu3WFcnof7jlA4mqBa", function(err, result){
        console.log("kathi anduko janaki: ", result);
        res.send("kathi dorikindi");
    })
})

app.get("/read", (req, res)=>{
    // console.log(req.cookies);
    res.send("read route")
})

app.listen(3000, ()=> console.log("Program start aindi"));