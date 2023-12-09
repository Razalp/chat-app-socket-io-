const express=require('express')
const {chats} =require('./data')
const dotenv =require('dotenv')
dotenv.config();
const PORT =process.env.PORT || 5000
const app=express()


app.get('/',(req,res)=>{
    res.send('api is runing')
})
app.get('/chat',(req,res)=>{
    res.send(chats)
})

app.get('/chat/:id',(req,res)=>{
    const singleChat =chats.find((c)=>c._id===req.params.id)
    res.send(singleChat)
})


app.listen(PORT,console.log('server run on port 5000'))