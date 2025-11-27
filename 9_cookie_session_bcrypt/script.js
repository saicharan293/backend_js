const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());
//$2b$10$ln5cOP1G9hGiDrTOKoHCP.7sFaIgZlmWebUEu3WFcnof7jlA4mqBa
app.get("/", (req, res)=>{
    // bcrypt.genSalt(10, function(err, salt){
    //     bcrypt.hash("na istam", 10, function(err, hash){
    //         console.log(hash);
            
    //     })
    // })
    let token = jwt.sign({email: "test@ex.com"}, "secret");
    res.cookie("token", token);
    console.log(token);
    
    res.send("cookies start cheddam mawa");
})

app.get("/check", (req, res)=>{
    // bcrypt.compare("na istam", "$2b$10$ln5cOP1G9hGiDrTOKoHCP.7sFaIgZlmWebUEu3WFcnof7jlA4mqBa", function(err, result){
    //     console.log("kathi anduko janaki: ", result);
    //     res.send("kathi dorikindi");
    // })
    let data = jwt.verify(req.cookies.token, "secret");
    console.log("nayaldi: ", data);
    res.send("nayaldi...")
    
})

app.get("/read", (req, res)=>{
    console.log(req.cookies.token);
    res.send("read route")
})

app.listen(3000, ()=> console.log("Program start aindi"));