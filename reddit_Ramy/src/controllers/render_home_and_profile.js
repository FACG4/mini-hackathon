const {serverError} = require('./error');

exports.renderHomeAndProfile=(req,res,result)=>{
    if (req.logged=='verified') {
      const isProfileOwner=req.userInfo.isProfileOwner
      res.render('home',{profileInfo:result.profileInfo,posts:result,jsFile:'home',logged:true,username:req.userInfo.username,isProfileOwner,Activepage:{home:true,singlePost:false}})
    }
    else if (req.logged=='not-verified') {
      res.render('home',{profileInfo:result.profileInfo,posts:result,jsFile:'home',Activepage:{home:true,singlePost:false}})
    }
}
exports.renderSinglePost=(req,res,result)=>{
    if (req.logged=='verified') {
      res.render('single_post',{profileInfo:result.profileInfo,posts:result,jsFile:'home',logged:true,username:req.userInfo.username,Activepage:{home:false,singlePost:true}})
    }
    else if (req.logged=='not-verified') {
      res.render('single_post',{profileInfo:result.profileInfo,posts:result,jsFile:'home',Activepage:{home:false,singlePost:true}})
    }
}
