const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/codeial_development");

const db=mongoose.connection;

db.on('error',console.error.bind("error connecting to db"))

db.once('open',()=>{
    console.log("connected to db successfully");
})

module.exports=db;