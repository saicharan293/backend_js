const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



app.get("/",(req, res)=>{
    let folderPath = "./files";
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
        console.log("Folder create aindi");
    }
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files: files})
    })
});


app.post("/create",(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(" ").map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join("")}.txt`,req.body.details, function(){
        res.redirect('/');
    })
})

app.get("/remove", (req,res)=>{
    const files = fs.readdirSync("./files");
    for(let f of files){
        const fp = path.join('./files', f);
        if(fs.statSync(fp).isFile()){
            fs.unlinkSync(fp);
        }
    }
    
    res.redirect("/")
})

app.get("/removeDir", (req, res)=>{
    fs.rm("./files",{recursive: true},(err)=>{
        console.log("folder deleted");
        res.send("dir removed")
    })
})


app.get("/file/:fileName", (req, res)=>{
    fs.readFile(`./files/${req.params.fileName}`,'utf8', (err, data)=>{
        console.log(req.params.fileName, data);
        
        res.render("show", {fileName: req.params.fileName, data});
    })
})

app.get("/edit/:fileName", (req, res)=>{
    fs.readFile(`./files/${req.params.fileName}`,'utf8', (err, data)=>{
        res.render("edit", {fileName: req.params.fileName, data});
    })
})

app.post("/edit", (req, res)=>{
    fs.rename(`./files/${req.body.previousName}`,`./files/${req.body.newName.split(" ").map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join("")}.txt`,function(err){
        res.redirect("/")
    })
})

// app.get("/first", (req, res)=>{
//     // fs.writeFile("trychestunna.txt","node js rastunnanu",function(){
//     //     res.send("File add aindi")
//     // })
//     // fs.rename("trychestunna.txt", "./files/trychestunna.txt", function(){
//     //     res.send("File move aithundi");
//     // })
// })

app.listen(3000, ()=>console.log("Program start aindi"))
