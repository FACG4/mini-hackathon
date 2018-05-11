const {serverError} = require('./error');

const {uniqueUserQ} = require('./../database/queries/unique_user_q');
exports.uniqueUserName=(req,res)=>{
  const {userName}=req.body
  uniqueUserQ(userName,null,(err,status)=>{
    if (err){
      if (err) return serverError(req,res)

    }
    else if(status) return res.send({ success: 'true'})
    return res.send({ error: {errorType:'client', msg: 'Username already exists'}})

  })
}
