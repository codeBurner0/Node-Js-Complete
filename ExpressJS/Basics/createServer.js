const express=require('express')
const app=express();

app.get("",(req,res)=>{
    res.send("This is Home Page");
})
app.get("/about",(req,res)=>{
    res.send("This is About Page.");
})

app.listen(3000);