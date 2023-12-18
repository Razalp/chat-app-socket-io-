const express=require('express');
const {protect}=require('../middlewares/AuthMiddlewares')
const router=express.Router();
const {accessChat}=require('../controllers/chatController')


router.get('/')
router.post('/',protect,accessChat);


module.exports=router
