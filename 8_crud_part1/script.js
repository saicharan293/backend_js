const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user.model');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/read", async(req, res)=>{
    const AllUsers = await userModel.find();
    res.render("read", {users: AllUsers});
})

app.post("/create", async (req, res)=>{
    const {fullname, email, url} = req.body;
    const newUser=await userModel.create({username: fullname, email, imageurl: url});
    console.log(newUser);
    res.redirect("read");
})

app.get("/delete/:id", async(req,res)=>{
    await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
})

app.get("/edit/:id", async(req, res)=>{
    let editUser = await userModel.findOne({_id: req.params.id});
    res.render("edit", {user: editUser});
})

app.post("/update/:id", async(req, res)=>{
    const {fullname, email, imageurl} = req.body;
    await userModel.findOneAndUpdate({_id: req.params.id},{username: fullname, email, imageurl});
    res.redirect("/read")
})

app.listen(3000, ()=>console.log("crud start chey bey!!!"))