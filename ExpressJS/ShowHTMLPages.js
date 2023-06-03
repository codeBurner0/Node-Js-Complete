const express=require('express')
const app=express();
const path=require('path')
const dirname=path.join(__dirname,'public')
app.use(express.static(dirname)).listen(3000)

app.get('/about',(req,res)=>{
    res.sendFile(dirname+"/About.html")
})