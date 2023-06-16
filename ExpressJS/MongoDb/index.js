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
connectdb().then((data)=>{
    data.insertMany([{"name":"Manvi","sec":"D"},{"name":"Vidisha","sec":"D"}])
})