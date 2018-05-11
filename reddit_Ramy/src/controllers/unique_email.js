const {serverError} = require('./error');

const {uniqueUserQ} = require('./../database/queries/unique_user_q');
exports.uniqueEmail=(req,res)=>{
  const {email}=req.body
  uniqueUserQ(null,email,(err,status)=>{
    if (err){
      if (err) return serverError(req,res)

    }
    else if(status) return res.send({ success: 'true'})
    return res.send({ error: {errorType:'client', msg: 'Email already exists'}})

  })
}
