const express=require('express');
const userController=require('../controller/users_controller');
const router=express.Router();

router.get('/profile',userController.profile);

router.get('/signIn',userController.signIn);

router.get('/signUp',userController.signUp);

router.post('/create',userController.create);

router.post('/create-session',userController.create_session);

module.exports=router;