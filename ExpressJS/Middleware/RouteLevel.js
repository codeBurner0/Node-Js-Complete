const express=require('express')
const app=express();


const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Enter Your Age ");
    }
    else if(req.query.age<18){
        res.send("You are not allowed to enter, your age is not 18+")
    }else{
        next();
    }
    
}


app.get('/',reqFilter,(req,res)=>{
    res.send("Welcom to home Screen");
})
app.get('/user',(req,res)=>{
    res.send("Welcom to user Screen");

})
app.listen(5000,()=>[
    console.log("server is started")
])