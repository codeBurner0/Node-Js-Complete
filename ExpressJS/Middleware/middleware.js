module.exports=reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Enter Your Age ");
    }
    else if(req.query.age<18){
        res.send("You are not allowed to enter, your age is not 18+")
    }else{
        next();
    }
    
}