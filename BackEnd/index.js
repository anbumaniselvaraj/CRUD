const express = require('express')
require('./config/dbconfig')
//  const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
// const { default: User } = require('../FrontEnd/src/User')

const app= express()
app.use(cors('*'))
app.use(express.json())

app.get('/',(req,res)=>{
     UserModel.find({})
     .then(users =>res.json(users))
     .catch(err => res.json(err))
 })

 app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users =>res.json(users))
    .catch(err => res.json(err))
})


app.post("/create",(req,res)=>{
    console.log(req.body)
    UserModel.create(req.body)
    .then((users) =>{
        console.log(users)
        res.json(users)
    })
    .catch(err => res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
 
    .then(users =>res.json(users))
    .catch(err => res.json(err))

    })

app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
    .then(users =>res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001,()=>{
    console.log("Server is running")
})