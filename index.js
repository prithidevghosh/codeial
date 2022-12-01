const express=require('express');

const app=express();
const port =8000;

app.listen(port,(e)=>{
   if(e){
    console.log(`error in listening to the port ${e}`);
    return;
   }
   console.log(`successfully connected to port ${port}`);
})