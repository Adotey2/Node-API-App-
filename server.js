const express=require('express')
const mongoose = require('mongoose')
const app =express()

app.get('/',(req,res)=>{
    res.send('Hello Node API')
 })

app.get('/blog',(req,res)=>{
    res.send('Hello blog my name is Leslie')
})

mongoose.
connect('mongodb+srv://Leslie:leslie123@cluster0.xoqp18x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000,()=>{
        console.log("App is running on port 3000")
        });
    
}).catch((error)=>{
    console.log(error)
})