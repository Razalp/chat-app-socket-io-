const express=require('express')
const router=express.Router()

const User=require('../models/userModel')
const generateToken=require('../config/generateToken')

const {Registertion , authUser}= require('../controllers/UserControllers')

router.post('/',Registertion );
router.post('/login',authUser)


module.exports=router