const express=require('express');
const db=require('./config/mongoose')
const cookie =require('cookie-parser');
const body_parser=require('body-parser');
const app=express();
const port =8000;
const expresslayout=require('express-ejs-layouts');

app.use(cookie());
app.use(express.static('./assets'));
app.use(expresslayout);
app.use(express.urlencoded());

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);




app.use('/',require('./route/index'));


app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,(e)=>{
   if(e){
    console.log(`error in listening to the port ${e}`);
    return;
   }
   console.log(`successfully connected to port no. ${port}`);
})