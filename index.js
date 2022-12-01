const express=require('express');

const app=express();
const port =8000;
const layout=require('express-ejs-layouts');

app.use(layout);
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