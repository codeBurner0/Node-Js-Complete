const express=require('express')
const app=express();
const path=require('path')
const dirname=path.join(__dirname,"../public")
console.log(dirname)
app.get("",(req,res)=>{
    res.send('<h1>This is Home Page.</h1><a href="/about">Go to About</a>');
})
app.get("/about",(req,res)=>{
    res.send('<h1>This is About Page.</h1><a href="/">Go to Home</a>');
})




app.get("*",(req,res)=>{
    res.sendFile(`${dirname}/404.html`)
})
app.listen(3000);

//updated