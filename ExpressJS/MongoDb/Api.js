const express=require("express");
const app=express();
const connectdb=require('./connection');

app.get('/',async(req,res)=>{
    let data=await connectdb();
    let response=await data.find().toArray();
    res.send(response)
})

app.listen(5000,()=>{
    console.log("server is started")
})
//updated