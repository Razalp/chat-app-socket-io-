const express=require('express')
const {chats} =require('./data/data')
const dotenv =require('dotenv')
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const connectDB = require('./config/db');
const userRoutes=require('./routues/UserRoutes')
const errorMiddleware=require('./middlewares/errorHandel')
dotenv.config();
const PORT =process.env.PORT || 5000
const app=express()
connectDB()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 
app.get('/',(req,res)=>{
    res.send('api is runing')
})

app.use('/',userRoutes)

// app.get('/chat',(req,res)=>{
//     res.send(chats)
// })



// app.get('/chat/:id',(req,res)=>{
//     const singleChat =chats.find((c)=>c._id===req.params.id)
//     res.status(200).json({singleChat})
// })


app.listen(PORT,console.log('server run on port 5000'))