const express = require('express')
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req, res)=>{
    res.send("get method shuru")
})


app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke');
})

app.listen(3000);