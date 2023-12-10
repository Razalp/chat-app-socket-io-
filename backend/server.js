const express=require('express')
const {chats} =require('./data/data')
const dotenv =require('dotenv')
const cors=require('cors')
dotenv.config();
const PORT =process.env.PORT || 5000
const app=express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send('api is runing')
})
app.get('/chat',(req,res)=>{
    res.send(chats)
})

app.get('/chat/:id',(req,res)=>{
    const singleChat =chats.find((c)=>c._id===req.params.id)
    res.status(200).json({singleChat})
})


app.listen(PORT,console.log('server run on port 5000'))