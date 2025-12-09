const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./Models/user.model');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const postModel = require('./Models/post.model');


app.set("view engine", 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname,'public')));

app.use(cookieParser());

app.get("/",(req, res)=>{
    res.render("index")
});

app.post("/create", async(req, res)=>{
    let {email, password, username, name, age} = req.body;
    let checkExisting = await userModel.findOne({email});
    if(checkExisting) return res.status(409).send('User already registered with this email');
    let hashed = await bcrypt.hash(password, 10);
    let newUser = await userModel.create({ email, username, name, password, hashedPassword: hashed, age});
    let token = jwt.sign({email: newUser.email, userid: newUser._id}, "secret");
    res.cookie("token", token);
    res.send("registered");
})

app.get("/login",(req, res)=>{
    res.render("login")
});
app.post("/login", async(req, res)=>{
    let {email, password} = req.body;
    let checkExisting = await userModel.findOne({email});
    if(!checkExisting) return res.status(401).send('Something went wrong');
    let response = await bcrypt.compare(password, checkExisting.hashedPassword);
    if (!response) {
        return res.status(401).send("Unauthorized login");
    }
    let token = jwt.sign({email, userid: checkExisting._id}, "secret");
    res.cookie("token", token);
    res.status(200).redirect("/profile");
})

app.get('/logout', async(req, res)=>{
    res.clearCookie("token");
    res.redirect("/login");
})

app.get("/profile", isLoggedIn, async (req, res)=>{
    let user = await userModel.findOne({email: req.user.email}).populate("posts");
    res.render("profile", { user });
})

app.post("/posts", isLoggedIn, async (req, res)=>{
    let newPost = await postModel.create({
        user: req.user.userid,
        content: req.body.content
    });
    await userModel.findByIdAndUpdate(req.user.userid, {$push: {posts: newPost._id}});
    res.redirect("/profile");
})

function isLoggedIn(req, res, next){
    let token = req.cookies.token;
    if(!token){
        return res.redirect("/login");
    } 
    try {
        let data = jwt.verify(req.cookies.token, "secret");
        req.user = data;
        return next();
    } catch (error) {
        return res.redirect("/login");
    }
}

app.listen(3000,()=>console.log("program start aindi"));