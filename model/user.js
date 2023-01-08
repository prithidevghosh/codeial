const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamp:true
})

const users=mongoose.model('users_db',userSchema);
module.exports=users;