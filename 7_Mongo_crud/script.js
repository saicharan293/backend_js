const express = require('express');
const app = express();
const userModel = require("./userModel");

app.get("/",(req, res)=>{
    res.send("namaskaram");
})

app.get("/create", async(req, res) => {
    let createdUser =await userModel.create({
        name: "kanmani",
        username: "kanmani",
        email: "kanmani@gmail.com"
    });

    res.send(createdUser);

});


app.get("/readAll", async(req, res)=>{
    let getUser = await userModel.find();
    res.send(getUser);
})

app.get("/read", async (req, res)=>{
    let getUser = await userModel.findOne({username: "kanmani"});
    res.send(getUser);
})

app.get("/update", async(req, res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username:"kiran"},{name: "test cheyali"},{new: true})
    res.send(updatedUser);
})


app.get("/delete", async(req, res)=>{
    let deletedUser = await userModel.findOneAndDelete({username: "kiran"});
    res.send(deletedUser);
})

app.listen(3000, ()=>{
    console.log("Start chey bey");
})