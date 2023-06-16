const express=require('express')
const app=express();
const reqFilter=require('./middleware')
const route=express.Router()

route.use(reqFilter)
app.get('/',(req,res)=>{
    res.send("Welcom to home Screen");
})
route.get('/user',(req,res)=>{
    res.send("Welcom to user Screen");

})

app.use('/',route)
app.listen(5000,()=>[
    console.log("server is started")
])
