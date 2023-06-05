// to run ejs engine run command npm i ejs
const express=require('express')
const app=express();

app.set("view engine","ejs")

app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("",(req,res)=>{
    res.render('home')
})

app.listen(3000,()=>[
    console.log("server is started")
])