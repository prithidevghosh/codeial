const e = require('express');
const user=require('../model/user');

module.exports.profile=(req,res)=>{
   return res.render('profile');
}
module.exports.signIn=(req,res)=>{
   return res.render('signIn');
}
module.exports.signUp=(req,res)=>{
   return res.render('signUp');
}

module.exports.create=(req,res)=>{
     //if password & confirm password dont match , return to sign up page
        if(req.body.password!=req.body.confirm_password){
         console.log(req.body.password);
         console.log(req.body.confirm_password);
         return res.redirect('back');
        }
     //then we will search for the user in db using email(if present)
        else{
          user.findOne({email:req.body.email},(err,newuser)=>{
              //if user is not there then create a user

                if(!newuser){
                   user.create(req.body,(err)=>{
                      if(err){
                        console.log("error in creating user");
                        return res.redirect('back');
                      }
                        return res.redirect('/users/signIn');
                      
                   })
                }else{
                   //if user is there redirect to sign up page
                  return res.redirect('back');
                }
          })
        }
   
    
}

module.exports.create_session=(req,res)=>{
  //find user using the email in db
  user.findOne({email:req.body.email},(err,newuser)=>{
         if(err){
            console.log("error in finding the user using email provided");
            return res.redirect('back');
         }else{
          if(newuser){
            if(req.body.password==newuser.password){
            return res.redirect('/users/profile');
            }else{
             return res.redirect('back');
            }
          }

         }
  })

  //if user found match the passwords

  //if passwords dont match return to signin

  //if passwords match redirect to profile page

  //if user not found return back

  //if email not found return back
}