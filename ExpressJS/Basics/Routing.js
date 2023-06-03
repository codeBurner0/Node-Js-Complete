const express=require('express')
const app=express();

app.get("",(req,res)=>{
    res.send('<h1>This is Home Page.</h1><a href="/about">Go to About</a>');
})
app.get("/about",(req,res)=>{
    res.send('<h1>This is About Page.</h1><a href="/">Go to Home</a>');
})

app.listen(3000);