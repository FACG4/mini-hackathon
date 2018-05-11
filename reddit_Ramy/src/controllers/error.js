exports.serverError=(req,res)=>{
  res.render('serverError',{error:{serverError:true}})
}
exports.clientError=(req,res)=>{
  res.render('clientError',{error:{serverError:true}})
}
