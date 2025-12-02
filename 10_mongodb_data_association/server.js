const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user.model');
const postModel = require('./models/posts.model');

app.use(express.json());
app.get(express.urlencoded({extended: true}));
app.get(express.static(path.join(__dirname, 'public')));

app.get("/",(req, res)=>{
    res.send("shuru: data association with mongo db");
})

app.get("/create",async (req,res)=>{
    let user = await userModel.create({
        username: "test",
        age: 24,
        email: "test@ex.com"
    })
    res.send(`created user details : ${user}`);
})

app.get("/post/create", async (req, res)=>{
    let post = await postModel.create({
        postdata: "post data ni pettali ikkada",
        user: "692ef7362d706b60dab229ab"
    })

    let user = await userModel.updateOne(
        {_id: "692ef7362d706b60dab229ab"},
        {$push: {posts: post._id}}
    );
    res.json({post, user})
})

app.get("/allposts", async(req, res)=>{
    let allposts = await postModel.find();
    res.send(allposts);
})

app.get("/created", async(req, res)=>{
    let user = await userModel.find();
    res.send(user);
})

app.listen(5000, ()=>console.log("program start aindi"));