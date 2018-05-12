exports.logout=(req,res)=>{
   res.clearCookie('token');
   res.redirect('/')
}
