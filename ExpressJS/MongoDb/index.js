const express=require('express');
const app=express();
const connectdb=require('./connection')

//read data
connectdb().then((data)=>{
    data.find().toArray().then((data)=>{
        console.log(data)
    })
})

//insert data

// connectdb().then((data)=>{
//     data.insertMany([{"name":"Manvi","sec":"D"},{"name":"Vidisha","sec":"D"}])
// })



//upadate data
// connectdb().then((data)=>{
//     data.updateMany({"class":"D"},{$set:{"class":"C"}})
// })


//delete data
connectdb().then((data)=>{
    let res=data.deleteOne({"name":"Anuj"})
    if(res.acknowledgement){
        console.log("record deleted")
    }else{
        console.log("record not deleted")
    }
})
