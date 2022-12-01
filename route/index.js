const express=require('express');
const homeController=require('../controller/home_controller')
const route=express.Router('');

route.get('/',homeController.home);

module.exports=route;