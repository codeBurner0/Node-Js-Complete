const express=require('express')
const data=require('../../Api/data')
const app=express()

app.get("",(req,res)=>{
    res.send(JSON.stringify(data))
})
app.get("/html",(req,res)=>{
    res.send("<h1>This is Html Page</h1>")
})
app.listen(3000)