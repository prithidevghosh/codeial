const express=require('express');
const homeController=require('../controller/home_controller')
const users=require('./users')
const route=express.Router('');

route.get('/',homeController.home);
route.use('/users',users);
module.exports=route;