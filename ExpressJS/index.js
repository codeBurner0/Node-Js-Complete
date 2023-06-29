const express =require('express');
const port =5000;
const app=express()
const path=require('path')
const dir=path.join(__dirname,'/public')

//Routing 
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.get("/contact",(req,res)=>{
    res.send(" <h1>This is your contact page</h1><a href='/'>Go Back Home</a>")
})
app.get("*",(req,res)=>{
    res.sendFile(`${dir}/404.html`)
})

app.listen(port,()=>{
    console.log(`your server is started at port ${port}`)
})