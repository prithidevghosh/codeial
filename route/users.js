const express=require('express');
const userController=require('../controller/users_controller');
const router=express.Router();

router.get('/profile',userController.profile);

module.exports=router;