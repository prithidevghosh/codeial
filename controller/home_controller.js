module.exports.home=(req,res)=>{
    
    res.cookie("hello",100);
    
    return res.render('home');

}