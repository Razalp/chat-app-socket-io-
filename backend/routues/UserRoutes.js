const express=require('express')
const router=express.Router()
const {protect}=require('../middlewares/AuthMiddlewares')
const User=require('../models/userModel')
const generateToken=require('../config/generateToken')

const {Registertion , authUser ,allUsers}= require('../controllers/UserControllers')

router.post('/',Registertion );
router.post('/login',authUser);
router.get('/',protect,allUsers)


module.exports=router