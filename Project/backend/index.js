const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello! what are you doing?");
})
app.listen(5000,()=>{
    console.log("server is started")
})